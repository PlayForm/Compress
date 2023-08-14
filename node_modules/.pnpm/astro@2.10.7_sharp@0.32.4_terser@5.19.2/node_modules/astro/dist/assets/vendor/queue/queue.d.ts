/**
 * Since CustomEvent is only supported in nodejs since version 19,
 * you have to create your own class instead of using CustomEvent
 * @see https://github.com/nodejs/node/issues/40678
 * */
export class QueueEvent extends Event {
    constructor(name: any, detail: any);
    detail: any;
}
export default class Queue extends EventTarget {
    constructor(options?: {});
    concurrency: any;
    timeout: any;
    autostart: any;
    results: any;
    pending: number;
    session: number;
    running: boolean;
    jobs: any[];
    timers: any[];
    _errorHandler(evt: any): void;
    pop(): any;
    shift(): any;
    indexOf(searchElement: any, fromIndex: any): number;
    lastIndexOf(searchElement: any, fromIndex: any): number;
    slice(start: any, end: any): Queue;
    reverse(): Queue;
    push(...workers: any[]): number;
    unshift(...workers: any[]): number;
    splice(start: any, deleteCount: any, ...workers: any[]): Queue;
    get length(): number;
    start(callback: any): any;
    stop(): void;
    end(error: any): void;
    clearTimers(): void;
    _addCallbackToEndEvent(cb: any): void;
    _createPromiseToEndEvent(): Promise<any>;
    done(error: any): void;
}
