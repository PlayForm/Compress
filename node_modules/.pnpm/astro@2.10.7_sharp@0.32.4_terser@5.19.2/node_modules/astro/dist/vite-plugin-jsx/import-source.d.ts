import type { TsConfigJson } from 'tsconfig-resolver';
import type { AstroRenderer } from '../@types/astro';
export declare function detectImportSource(code: string, jsxRenderers: Map<string, AstroRenderer>, tsConfig?: TsConfigJson): Promise<string | undefined>;
