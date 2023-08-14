function createPluginContainer(options, internals) {
  const clientPlugins = [];
  const ssrPlugins = [];
  const allPlugins = /* @__PURE__ */ new Set();
  return {
    options,
    internals,
    register(plugin) {
      allPlugins.add(plugin);
      switch (plugin.build) {
        case "client": {
          clientPlugins.push(plugin);
          break;
        }
        case "ssr": {
          ssrPlugins.push(plugin);
          break;
        }
        case "both": {
          clientPlugins.push(plugin);
          ssrPlugins.push(plugin);
          break;
        }
      }
    },
    // Hooks
    runBeforeHook(build, input) {
      var _a;
      let plugins = build === "ssr" ? ssrPlugins : clientPlugins;
      let vitePlugins = [];
      let lastVitePlugins = [];
      for (const plugin of plugins) {
        if ((_a = plugin.hooks) == null ? void 0 : _a["build:before"]) {
          let result = plugin.hooks["build:before"]({ build, input });
          if (result.vitePlugin) {
            vitePlugins.push(result.vitePlugin);
          }
        }
      }
      return {
        vitePlugins,
        lastVitePlugins
      };
    },
    async runPostHook(ssrReturn, clientReturn) {
      var _a;
      const mutations = /* @__PURE__ */ new Map();
      const ssrOutputs = [];
      const clientOutputs = [];
      if (Array.isArray(ssrReturn)) {
        ssrOutputs.push(...ssrReturn);
      } else if ("output" in ssrReturn) {
        ssrOutputs.push(ssrReturn);
      }
      if (Array.isArray(clientReturn)) {
        clientOutputs.push(...clientReturn);
      } else if (clientReturn && "output" in clientReturn) {
        clientOutputs.push(clientReturn);
      }
      const mutate = (chunk, build, newCode) => {
        chunk.code = newCode;
        mutations.set(chunk.fileName, {
          build,
          code: newCode
        });
      };
      for (const plugin of allPlugins) {
        const postHook = (_a = plugin.hooks) == null ? void 0 : _a["build:post"];
        if (postHook) {
          await postHook({
            ssrOutputs,
            clientOutputs,
            mutate
          });
        }
      }
      return mutations;
    }
  };
}
export {
  createPluginContainer
};
