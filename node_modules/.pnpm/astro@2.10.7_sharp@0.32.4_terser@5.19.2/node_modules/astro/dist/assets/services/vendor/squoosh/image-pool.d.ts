/// <reference types="node" />
import type { ImageOutputFormat } from '../../../types.js';
import type { Operation } from './image.js';
export declare function processBuffer(buffer: Buffer, operations: Operation[], encoding: ImageOutputFormat, quality?: number): Promise<Uint8Array>;
