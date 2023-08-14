import { type ESBuildTransformResult } from 'vite';
import { type CompileProps, type CompileResult } from '../core/compile/index.js';
import type { LogOptions } from '../core/logger/core.js';
interface CachedFullCompilation {
    compileProps: CompileProps;
    logging: LogOptions;
}
interface FullCompileResult extends Omit<CompileResult, 'map'> {
    map: ESBuildTransformResult['map'];
}
export declare function cachedFullCompilation({ compileProps, logging, }: CachedFullCompilation): Promise<FullCompileResult>;
export {};
