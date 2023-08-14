import type { GetModuleInfo } from 'rollup';
import type { AstroSettings } from '../../@types/astro';
export declare function shortHashedName(id: string, ctx: {
    getModuleInfo: GetModuleInfo;
}): string;
export declare function createSlugger(settings: AstroSettings): (id: string, ctx: {
    getModuleInfo: GetModuleInfo;
}) => string;
