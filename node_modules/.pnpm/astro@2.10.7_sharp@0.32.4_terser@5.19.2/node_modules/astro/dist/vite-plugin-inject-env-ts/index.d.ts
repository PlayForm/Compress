/// <reference types="node" />
import type fsMod from 'node:fs';
import { type Plugin } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import { type LogOptions } from '../core/logger/core.js';
export declare function getEnvTsPath({ srcDir }: {
    srcDir: URL;
}): URL;
export declare function astroInjectEnvTsPlugin({ settings, logging, fs, }: {
    settings: AstroSettings;
    logging: LogOptions;
    fs: typeof fsMod;
}): Plugin;
export declare function setUpEnvTs({ settings, logging, fs, }: {
    settings: AstroSettings;
    logging: LogOptions;
    fs: typeof fsMod;
}): Promise<void>;
