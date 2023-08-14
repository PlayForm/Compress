import { normalizeEntryId } from "./plugin-component-entry.js";
function vitePluginInternals(input, internals) {
  return {
    name: "@astro/plugin-build-internals",
    config(config, options) {
      var _a;
      const extra = {};
      const noExternal = [], external = [];
      if (options.command === "build" && ((_a = config.build) == null ? void 0 : _a.ssr)) {
        noExternal.push("astro");
        external.push("shiki");
      }
      extra.ssr = {
        external,
        noExternal
      };
      return extra;
    },
    async generateBundle(_options, bundle) {
      const promises = [];
      const mapping = /* @__PURE__ */ new Map();
      for (const specifier of input) {
        promises.push(
          this.resolve(specifier).then((result) => {
            if (result) {
              if (mapping.has(result.id)) {
                mapping.get(result.id).add(specifier);
              } else {
                mapping.set(result.id, /* @__PURE__ */ new Set([specifier]));
              }
            }
          })
        );
      }
      await Promise.all(promises);
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "chunk" && chunk.facadeModuleId) {
          const specifiers = mapping.get(chunk.facadeModuleId) || /* @__PURE__ */ new Set([chunk.facadeModuleId]);
          for (const specifier of specifiers) {
            internals.entrySpecifierToBundleMap.set(normalizeEntryId(specifier), chunk.fileName);
          }
        } else if (chunk.type === "chunk") {
          for (const id of Object.keys(chunk.modules)) {
            const pageData = internals.pagesByViteID.get(id);
            if (pageData) {
              internals.pageToBundleMap.set(pageData.moduleSpecifier, chunk.fileName);
            }
          }
        }
      }
    }
  };
}
function pluginInternals(internals) {
  return {
    build: "both",
    hooks: {
      "build:before": ({ input }) => {
        return {
          vitePlugin: vitePluginInternals(input, internals)
        };
      }
    }
  };
}
export {
  pluginInternals,
  vitePluginInternals
};
