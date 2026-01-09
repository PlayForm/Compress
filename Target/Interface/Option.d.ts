import type Option from "@playform/pipe/Target/Interface/Option.js";
import type csso from "../Interface/CSS/csso.js";
import type lightningcss from "../Interface/CSS/lightningcss.js";
import type sharp from "../Interface/Image/sharp.js";
import type _Map from "../Interface/Map.js";
import type Parser from "../Interface/Parser.js";
import type html_minifier_terser from "../Type/HTML/html-minifier-terser.js";
import type terser from "../Type/JavaScript/terser.js";
import type svgo from "../Type/SVG/svgo.js";
/**
 * @module Option
 *
 */
export default interface Interface extends Option {
    /**
     * csso, lightningcss option properties
     *
     */
    CSS?: boolean | Partial<{
        csso?: csso | boolean;
        lightningcss?: lightningcss | boolean;
    }>;
    /**
     * html-minifier-terser option properties
     *
     */
    HTML?: boolean | Partial<{
        "html-minifier-terser"?: html_minifier_terser | boolean;
    }>;
    /**
     * sharp option properties
     *
     */
    Image?: boolean | Partial<{
        sharp?: sharp | boolean;
    }>;
    /**
     * terser option properties
     *
     */
    JavaScript?: boolean | Partial<{
        terser?: terser | boolean;
    }>;
    /**
     * svgo option properties
     *
     */
    SVG?: boolean | Partial<{
        svgo?: svgo | boolean;
    }>;
    /**
     * JSON option properties
     *
     */
    JSON?: boolean | Partial<{
        replacer?: Parameters<JSON["stringify"]>[1];
        space?: Parameters<JSON["stringify"]>[2];
    }>;
    /**
     * Map to different file paths
     *
     */
    Map?: boolean | _Map;
    /**
     * Parsers for different file types
     *
     */
    Parser?: Parser;
}
