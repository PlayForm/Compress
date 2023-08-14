import type { Plugin as VitePlugin } from 'vite';
import type { BuildInternals } from './internal';
import type { StaticBuildOptions, ViteBuildReturn } from './types';
type RollupOutputArray = Extract<ViteBuildReturn, Array<any>>;
type OutputChunkorAsset = RollupOutputArray[number]['output'][number];
type OutputChunk = Extract<OutputChunkorAsset, {
    type: 'chunk';
}>;
type MutateChunk = (chunk: OutputChunk, build: 'server' | 'client', newCode: string) => void;
export type AstroBuildPlugin = {
    build: 'ssr' | 'client' | 'both';
    hooks?: {
        'build:before'?: (opts: {
            build: 'ssr' | 'client';
            input: Set<string>;
        }) => {
            enforce?: 'after-user-plugins';
            vitePlugin: VitePlugin | VitePlugin[] | undefined;
        };
        'build:post'?: (opts: {
            ssrOutputs: RollupOutputArray;
            clientOutputs: RollupOutputArray;
            mutate: MutateChunk;
        }) => void | Promise<void>;
    };
};
export declare function createPluginContainer(options: StaticBuildOptions, internals: BuildInternals): {
    options: StaticBuildOptions;
    internals: BuildInternals;
    register(plugin: AstroBuildPlugin): void;
    runBeforeHook(build: 'ssr' | 'client', input: Set<string>): {
        vitePlugins: (VitePlugin | VitePlugin[])[];
        lastVitePlugins: (VitePlugin | VitePlugin[])[];
    };
    runPostHook(ssrReturn: ViteBuildReturn, clientReturn: ViteBuildReturn | null): Promise<Map<string, {
        build: 'server' | 'client';
        code: string;
    }>>;
};
export type AstroBuildPluginContainer = ReturnType<typeof createPluginContainer>;
export {};
