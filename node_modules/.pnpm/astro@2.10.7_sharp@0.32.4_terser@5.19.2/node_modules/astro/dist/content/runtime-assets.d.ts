import type { PluginContext } from 'rollup';
import { z } from 'zod';
export declare function createImage(pluginContext: PluginContext, entryFilePath: string): () => z.ZodEffects<z.ZodString, import("../assets/types.js").ImageMetadata | z.ZodNever, string>;
