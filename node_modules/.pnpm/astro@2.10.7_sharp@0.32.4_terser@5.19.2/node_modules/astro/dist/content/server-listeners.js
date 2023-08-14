import { bold, cyan } from "kleur/colors";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { loadTSConfig } from "../core/config/tsconfig.js";
import { info, warn } from "../core/logger/core.js";
import { appendForwardSlash } from "../core/path.js";
import { createContentTypesGenerator } from "./types-generator.js";
import { getContentPaths, globalContentConfigObserver } from "./utils.js";
async function attachContentServerListeners({
  viteServer,
  fs,
  logging,
  settings
}) {
  const contentPaths = getContentPaths(settings.config, fs);
  if (fs.existsSync(contentPaths.contentDir)) {
    info(
      logging,
      "content",
      `Watching ${cyan(
        contentPaths.contentDir.href.replace(settings.config.root.href, "")
      )} for changes`
    );
    const maybeTsConfigStats = getTSConfigStatsWhenAllowJsFalse({ contentPaths, settings });
    if (maybeTsConfigStats)
      warnAllowJsIsFalse({ ...maybeTsConfigStats, logging });
    await attachListeners();
  } else {
    viteServer.watcher.on("addDir", contentDirListener);
    async function contentDirListener(dir) {
      if (appendForwardSlash(pathToFileURL(dir).href) === contentPaths.contentDir.href) {
        info(logging, "content", `Content dir found. Watching for changes`);
        await attachListeners();
        viteServer.watcher.removeListener("addDir", contentDirListener);
      }
    }
  }
  async function attachListeners() {
    const contentGenerator = await createContentTypesGenerator({
      fs,
      settings,
      logging,
      viteServer,
      contentConfigObserver: globalContentConfigObserver
    });
    await contentGenerator.init();
    info(logging, "content", "Types generated");
    viteServer.watcher.on("add", (entry) => {
      contentGenerator.queueEvent({ name: "add", entry });
    });
    viteServer.watcher.on(
      "addDir",
      (entry) => contentGenerator.queueEvent({ name: "addDir", entry })
    );
    viteServer.watcher.on(
      "change",
      (entry) => contentGenerator.queueEvent({ name: "change", entry })
    );
    viteServer.watcher.on("unlink", (entry) => {
      contentGenerator.queueEvent({ name: "unlink", entry });
    });
    viteServer.watcher.on(
      "unlinkDir",
      (entry) => contentGenerator.queueEvent({ name: "unlinkDir", entry })
    );
  }
}
function warnAllowJsIsFalse({
  logging,
  tsConfigFileName,
  contentConfigFileName
}) {
  if (!["info", "warn"].includes(logging.level))
    warn(
      logging,
      "content",
      `Make sure you have the ${bold("allowJs")} compiler option set to ${bold(
        "true"
      )} in your ${bold(tsConfigFileName)} file to have autocompletion in your ${bold(
        contentConfigFileName
      )} file.
See ${bold("https://www.typescriptlang.org/tsconfig#allowJs")} for more information.
			`
    );
}
function getTSConfigStatsWhenAllowJsFalse({
  contentPaths,
  settings
}) {
  var _a, _b;
  const isContentConfigJsFile = [".js", ".mjs"].some(
    (ext) => contentPaths.config.url.pathname.endsWith(ext)
  );
  if (!isContentConfigJsFile)
    return;
  const inputConfig = loadTSConfig(fileURLToPath(settings.config.root), false);
  const tsConfigFileName = inputConfig.exists && inputConfig.path.split(path.sep).pop();
  if (!tsConfigFileName)
    return;
  const contentConfigFileName = contentPaths.config.url.pathname.split(path.sep).pop();
  const allowJSOption = (_b = (_a = inputConfig == null ? void 0 : inputConfig.config) == null ? void 0 : _a.compilerOptions) == null ? void 0 : _b.allowJs;
  const hasAllowJs = allowJSOption === true || tsConfigFileName === "jsconfig.json" && allowJSOption !== false;
  if (hasAllowJs)
    return;
  return { tsConfigFileName, contentConfigFileName };
}
export {
  attachContentServerListeners
};
