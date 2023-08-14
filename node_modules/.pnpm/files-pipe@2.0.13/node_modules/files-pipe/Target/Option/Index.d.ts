/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Pattern } from "fast-glob";
import type { Stream } from "stream";
export type Debug = 0 | 1 | 2;
export type Buffer = string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream;
export interface Execution {
    Fulfilled?: boolean | ((Plan: Plan) => Promise<false | string>);
    Failed?: boolean | ((Input: File, _Error: unknown) => Promise<false | string>);
    Accomplished?: boolean | ((On: File) => Promise<false | string>);
    Changed?: (Plan: Plan) => Promise<Plan>;
    Passed?: (On: File) => Promise<Boolean>;
    Read?: (On: File) => Promise<Buffer>;
    Wrote?: (On: File) => Promise<Buffer>;
}
export type Exclude = string | RegExp | ((File: string) => boolean);
export type Path = string | URL | Map<string | URL, string | URL> | false;
export interface Option {
    [key: string]: any;
    Path?: Path | Path[] | Set<Path>;
    Exclude?: Exclude | Exclude[] | Set<Exclude>;
    Files?: Pattern | Pattern[];
    Type?: string;
    Pipe?: Execution;
    Logger?: Debug;
}
export interface Plan {
    Debug: Debug;
    Files: number;
    Info: any;
    Paths: Map<Dir["Input"], Dir["Output"]>;
    Results: Map<`${Dir["Output"]}${File["Output"]}`, `${Dir["Input"]}${File["Input"]}`>;
    On: File;
}
export interface Dir {
    Input: string;
    Output: string;
}
export interface File {
    Input: string;
    Output: string;
    After: number;
    Before: number;
    Buffer: Buffer;
}
declare const _default: {
    Path: string;
    Logger: 2;
    Pipe: {
        Wrote: (On: File) => Promise<Buffer>;
        Read: (On: File) => Promise<string>;
        Passed: (On: File) => Promise<boolean>;
        Failed: (On: File) => Promise<string>;
        Accomplished: (On: File) => Promise<string>;
        Fulfilled: (Plan: Plan) => Promise<string | false>;
        Changed: (Plan: Plan) => Promise<Plan>;
    };
};
export default _default;
