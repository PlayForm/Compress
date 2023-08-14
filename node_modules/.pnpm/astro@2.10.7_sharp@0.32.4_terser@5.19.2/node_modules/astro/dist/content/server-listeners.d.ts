/// <reference types="node" />
import type fsMod from 'node:fs';
import type { ViteDevServer } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import { type LogOptions } from '../core/logger/core.js';
interface ContentServerListenerParams {
    fs: typeof fsMod;
    logging: LogOptions;
    settings: AstroSettings;
    viteServer: ViteDevServer;
}
export declare function attachContentServerListeners({ viteServer, fs, logging, settings, }: ContentServerListenerParams): Promise<void>;
export {};
