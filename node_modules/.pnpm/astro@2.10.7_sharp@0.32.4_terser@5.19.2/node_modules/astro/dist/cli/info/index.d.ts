import type yargs from 'yargs-parser';
interface InfoOptions {
    flags: yargs.Arguments;
}
export declare function printInfo({ flags }: InfoOptions): Promise<void>;
export {};
