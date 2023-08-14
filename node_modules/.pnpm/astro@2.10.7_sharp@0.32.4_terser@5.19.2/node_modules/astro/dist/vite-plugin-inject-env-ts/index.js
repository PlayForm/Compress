import { bold } from "kleur/colors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizePath } from "vite";
import { getContentPaths, getDotAstroTypeReference } from "../content/index.js";
import { info } from "../core/logger/core.js";
function getEnvTsPath({ srcDir }) {
  return new URL("env.d.ts", srcDir);
}
function astroInjectEnvTsPlugin({
  settings,
  logging,
  fs
}) {
  return {
    name: "astro-inject-env-ts",
    // Use `post` to ensure project setup is complete
    // Ex. `.astro` types have been written
    enforce: "post",
    async config() {
      await setUpEnvTs({ settings, logging, fs });
    }
  };
}
async function setUpEnvTs({
  settings,
  logging,
  fs
}) {
  const envTsPath = getEnvTsPath(settings.config);
  const dotAstroDir = getContentPaths(settings.config).cacheDir;
  const dotAstroTypeReference = getDotAstroTypeReference(settings.config);
  const envTsPathRelativetoRoot = normalizePath(
    path.relative(fileURLToPath(settings.config.root), fileURLToPath(envTsPath))
  );
  if (fs.existsSync(envTsPath)) {
    let typesEnvContents = await fs.promises.readFile(envTsPath, "utf-8");
    if (settings.config.experimental.assets && typesEnvContents.includes('types="astro/client"')) {
      typesEnvContents = typesEnvContents.replace(
        'types="astro/client"',
        'types="astro/client-image"'
      );
      await fs.promises.writeFile(envTsPath, typesEnvContents, "utf-8");
      info(logging, "assets", `Added ${bold(envTsPathRelativetoRoot)} types`);
    } else if (!settings.config.experimental.assets && typesEnvContents.includes('types="astro/client-image"')) {
      typesEnvContents = typesEnvContents.replace(
        'types="astro/client-image"',
        'types="astro/client"'
      );
      await fs.promises.writeFile(envTsPath, typesEnvContents, "utf-8");
      info(logging, "assets", `Removed ${bold(envTsPathRelativetoRoot)} types`);
    }
    if (!fs.existsSync(dotAstroDir))
      return;
    const expectedTypeReference = getDotAstroTypeReference(settings.config);
    if (!typesEnvContents.includes(expectedTypeReference)) {
      typesEnvContents = `${expectedTypeReference}
${typesEnvContents}`;
      await fs.promises.writeFile(envTsPath, typesEnvContents, "utf-8");
      info(logging, "content", `Added ${bold(envTsPathRelativetoRoot)} types`);
    }
  } else {
    let referenceDefs = [];
    if (settings.config.experimental.assets) {
      referenceDefs.push('/// <reference types="astro/client-image" />');
    } else if (settings.config.integrations.find((i) => i.name === "@astrojs/image")) {
      referenceDefs.push('/// <reference types="@astrojs/image/client" />');
    } else {
      referenceDefs.push('/// <reference types="astro/client" />');
    }
    if (fs.existsSync(dotAstroDir)) {
      referenceDefs.push(dotAstroTypeReference);
    }
    await fs.promises.mkdir(settings.config.srcDir, { recursive: true });
    await fs.promises.writeFile(envTsPath, referenceDefs.join("\n"), "utf-8");
    info(logging, "astro", `Added ${bold(envTsPathRelativetoRoot)} types`);
  }
}
export {
  astroInjectEnvTsPlugin,
  getEnvTsPath,
  setUpEnvTs
};
