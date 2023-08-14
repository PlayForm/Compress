import type { Plugin as VitePlugin } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import type { LogOptions } from '../core/logger/core.js';
/** Connect Astro integrations into Vite, as needed. */
export default function astroIntegrationsContainerPlugin({ settings, logging, }: {
    settings: AstroSettings;
    logging: LogOptions;
}): VitePlugin;
