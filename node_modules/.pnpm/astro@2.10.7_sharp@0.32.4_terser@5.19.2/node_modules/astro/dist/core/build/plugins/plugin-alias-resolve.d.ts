import type { Plugin as VitePlugin } from 'vite';
import type { BuildInternals } from '../internal.js';
import type { AstroBuildPlugin } from '../plugin.js';
/**
 * `@rollup/plugin-alias` doesn't resolve aliases in Rollup input by default. This plugin fixes it
 * with a partial fork of it's resolve function. https://github.com/rollup/plugins/blob/master/packages/alias/src/index.ts
 * When https://github.com/rollup/plugins/pull/1402 is merged, we can remove this plugin.
 */
export declare function vitePluginAliasResolve(internals: BuildInternals): VitePlugin;
export declare function pluginAliasResolve(internals: BuildInternals): AstroBuildPlugin;
