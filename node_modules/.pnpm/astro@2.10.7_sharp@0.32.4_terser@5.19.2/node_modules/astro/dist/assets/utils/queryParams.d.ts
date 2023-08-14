import type { ImageMetadata } from '../types.js';
export declare function getOrigQueryParams(params: URLSearchParams): Omit<ImageMetadata, 'src'> | undefined;
