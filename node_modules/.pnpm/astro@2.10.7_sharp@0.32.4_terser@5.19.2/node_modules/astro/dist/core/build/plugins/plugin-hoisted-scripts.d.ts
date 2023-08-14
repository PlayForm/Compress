import type { Plugin as VitePlugin } from 'vite';
import type { AstroSettings } from '../../../@types/astro';
import type { BuildInternals } from '../internal.js';
import type { AstroBuildPlugin } from '../plugin';
import type { StaticBuildOptions } from '../types';
export declare function vitePluginHoistedScripts(settings: AstroSettings, internals: BuildInternals): VitePlugin;
export declare function pluginHoistedScripts(options: StaticBuildOptions, internals: BuildInternals): AstroBuildPlugin;
