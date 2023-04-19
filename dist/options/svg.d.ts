import type { Config } from "svgo";
export interface SVG extends Config {
    [key: string]: any;
}
declare const _default: {
    multipass: true;
    js2svg: {
        indent: number;
        pretty: false;
    };
    plugins: "preset-default"[];
};
export default _default;
