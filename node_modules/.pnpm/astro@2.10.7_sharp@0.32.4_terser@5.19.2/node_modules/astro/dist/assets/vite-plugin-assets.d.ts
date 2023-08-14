import type * as vite from 'vite';
import type { AstroPluginOptions } from '../@types/astro';
export default function assets({ settings, logging, mode, }: AstroPluginOptions & {
    mode: string;
}): vite.Plugin[];
