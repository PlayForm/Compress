/// <reference types="node" />
import type fsMod from 'node:fs';
import { type ViteDevServer } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import { type LogOptions } from '../core/logger/core.js';
import { type ContentObservable } from './utils.js';
type ChokidarEvent = 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir';
type RawContentEvent = {
    name: ChokidarEvent;
    entry: string;
};
type CreateContentGeneratorParams = {
    contentConfigObserver: ContentObservable;
    logging: LogOptions;
    settings: AstroSettings;
    /** This is required for loading the content config */
    viteServer: ViteDevServer;
    fs: typeof fsMod;
};
type EventOpts = {
    logLevel: 'info' | 'warn';
};
export declare function createContentTypesGenerator({ contentConfigObserver, fs, logging, settings, viteServer, }: CreateContentGeneratorParams): Promise<{
    init: () => Promise<{
        typesGenerated: true;
    } | {
        typesGenerated: false;
        reason: 'no-content-dir';
    }>;
    queueEvent: (rawEvent: RawContentEvent, opts?: EventOpts) => void;
}>;
export {};
