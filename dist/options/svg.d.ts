export interface js2svgOptions {
    /**
     * String with spaces or number of spaces
     * @default 4
     */
    indent?: string | number;
    /**
     * @default false
     */
    pretty?: boolean;
}
export default interface SVG {
    [key: string]: any;
    /**
     * @default false
     */
    multipass?: boolean;
    /**
     * 'enc' or 'unenc'
     * @default "base64"
     */
    datauri?: string;
    /**
     * @default { indent: 4, pretty: false }
     */
    js2svg?: js2svgOptions;
    /**
     * @default ["preset-default"]
     */
    plugins?: any;
}
