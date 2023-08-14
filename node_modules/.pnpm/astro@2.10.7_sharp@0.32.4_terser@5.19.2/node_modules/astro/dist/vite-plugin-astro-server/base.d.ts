import type * as vite from 'vite';
import type { AstroSettings } from '../@types/astro';
import { type LogOptions } from '../core/logger/core.js';
export declare function baseMiddleware(settings: AstroSettings, logging: LogOptions): vite.Connect.NextHandleFunction;
