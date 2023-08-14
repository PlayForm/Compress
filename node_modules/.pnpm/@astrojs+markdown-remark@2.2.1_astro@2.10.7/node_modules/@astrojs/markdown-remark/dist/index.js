import { toRemarkInitializeAstroData } from "./frontmatter-injection.js";
import { loadPlugins } from "./load-plugins.js";
import { rehypeHeadingIds } from "./rehype-collect-headings.js";
import { remarkCollectImages } from "./remark-collect-images.js";
import remarkPrism from "./remark-prism.js";
import scopedStyles from "./remark-scoped-styles.js";
import remarkShiki from "./remark-shiki.js";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import markdown from "remark-parse";
import markdownToHtml from "remark-rehype";
import remarkSmartypants from "remark-smartypants";
import { unified } from "unified";
import { VFile } from "vfile";
import { rehypeImages } from "./rehype-images.js";
import { rehypeHeadingIds as rehypeHeadingIds2 } from "./rehype-collect-headings.js";
import { remarkCollectImages as remarkCollectImages2 } from "./remark-collect-images.js";
export * from "./types.js";
const markdownConfigDefaults = {
  syntaxHighlight: "shiki",
  shikiConfig: {
    langs: [],
    theme: "github-dark",
    wrap: false
  },
  remarkPlugins: [],
  rehypePlugins: [],
  remarkRehype: {},
  gfm: true,
  smartypants: true
};
const isPerformanceBenchmark = Boolean(process.env.ASTRO_PERFORMANCE_BENCHMARK);
async function renderMarkdown(content, opts) {
  var _a;
  let {
    fileURL,
    syntaxHighlight = markdownConfigDefaults.syntaxHighlight,
    shikiConfig = markdownConfigDefaults.shikiConfig,
    remarkPlugins = markdownConfigDefaults.remarkPlugins,
    rehypePlugins = markdownConfigDefaults.rehypePlugins,
    remarkRehype = markdownConfigDefaults.remarkRehype,
    gfm = markdownConfigDefaults.gfm,
    smartypants = markdownConfigDefaults.smartypants,
    frontmatter: userFrontmatter = {}
  } = opts;
  const input = new VFile({ value: content, path: fileURL });
  const scopedClassName = (_a = opts.$) == null ? void 0 : _a.scopedClassName;
  let parser = unified().use(markdown).use(toRemarkInitializeAstroData({ userFrontmatter })).use([]);
  if (!isPerformanceBenchmark && gfm) {
    if (gfm) {
      parser.use(remarkGfm);
    }
    if (smartypants) {
      parser.use(remarkSmartypants);
    }
  }
  const loadedRemarkPlugins = await Promise.all(loadPlugins(remarkPlugins));
  const loadedRehypePlugins = await Promise.all(loadPlugins(rehypePlugins));
  loadedRemarkPlugins.forEach(([plugin, pluginOpts]) => {
    parser.use([[plugin, pluginOpts]]);
  });
  if (!isPerformanceBenchmark) {
    if (scopedClassName) {
      parser.use([scopedStyles(scopedClassName)]);
    }
    if (syntaxHighlight === "shiki") {
      parser.use([await remarkShiki(shikiConfig, scopedClassName)]);
    } else if (syntaxHighlight === "prism") {
      parser.use([remarkPrism(scopedClassName)]);
    }
    if (opts.experimentalAssets) {
      parser.use([remarkCollectImages]);
    }
  }
  parser.use([
    [
      markdownToHtml,
      {
        allowDangerousHtml: true,
        passThrough: [],
        ...remarkRehype
      }
    ]
  ]);
  loadedRehypePlugins.forEach(([plugin, pluginOpts]) => {
    parser.use([[plugin, pluginOpts]]);
  });
  if (opts.experimentalAssets) {
    parser.use(rehypeImages());
  }
  if (!isPerformanceBenchmark) {
    parser.use([rehypeHeadingIds]);
  }
  parser.use([rehypeRaw]).use(rehypeStringify, { allowDangerousHtml: true });
  let vfile;
  try {
    vfile = await parser.process(input);
  } catch (err) {
    err = prefixError(err, `Failed to parse Markdown file "${input.path}"`);
    console.error(err);
    throw err;
  }
  const headings = (vfile == null ? void 0 : vfile.data.__astroHeadings) || [];
  return {
    metadata: { headings, source: content, html: String(vfile.value) },
    code: String(vfile.value),
    vfile
  };
}
function prefixError(err, prefix) {
  if (err && err.message) {
    try {
      err.message = `${prefix}:
${err.message}`;
      return err;
    } catch (error) {
    }
  }
  const wrappedError = new Error(`${prefix}${err ? `: ${err}` : ""}`);
  try {
    wrappedError.stack = err.stack;
    wrappedError.cause = err;
  } catch (error) {
  }
  return wrappedError;
}
export {
  markdownConfigDefaults,
  rehypeHeadingIds2 as rehypeHeadingIds,
  remarkCollectImages2 as remarkCollectImages,
  renderMarkdown
};
