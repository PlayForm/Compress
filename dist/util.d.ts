export declare const defaultLogger: {
    [x: string]: (message: string) => void;
    trace(msg: string): void;
    debug(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    info(msg: string): void;
    silent(): void;
};
export declare function createLogger(logLevel: string): {};
