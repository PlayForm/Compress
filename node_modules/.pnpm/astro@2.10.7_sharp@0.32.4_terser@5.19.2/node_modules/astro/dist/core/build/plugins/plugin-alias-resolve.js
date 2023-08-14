function vitePluginAliasResolve(internals) {
  let aliases;
  return {
    name: "@astro/plugin-alias-resolve",
    enforce: "pre",
    configResolved(config) {
      aliases = config.resolve.alias;
    },
    async resolveId(id, importer, opts) {
      if (!importer && (internals.discoveredHydratedComponents.has(id) || internals.discoveredClientOnlyComponents.has(id))) {
        const matchedEntry = aliases.find((entry) => matches(entry.find, id));
        if (!matchedEntry) {
          return null;
        }
        const updatedId = id.replace(matchedEntry.find, matchedEntry.replacement);
        return this.resolve(updatedId, importer, Object.assign({ skipSelf: true }, opts)).then(
          (resolved) => resolved || { id: updatedId }
        );
      }
    }
  };
}
function matches(pattern, importee) {
  if (pattern instanceof RegExp) {
    return pattern.test(importee);
  }
  if (importee.length < pattern.length) {
    return false;
  }
  if (importee === pattern) {
    return true;
  }
  return importee.startsWith(pattern + "/");
}
function pluginAliasResolve(internals) {
  return {
    build: "client",
    hooks: {
      "build:before": () => {
        return {
          vitePlugin: vitePluginAliasResolve(internals)
        };
      }
    }
  };
}
export {
  pluginAliasResolve,
  vitePluginAliasResolve
};
