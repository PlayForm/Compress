import { type Plugin as VitePlugin } from 'vite';
import type { AstroSettings } from '../@types/astro';
/** Returns a Vite plugin used to alias paths from tsconfig.json and jsconfig.json. */
export default function configAliasVitePlugin({ settings, }: {
    settings: AstroSettings;
}): VitePlugin | null;
