import type On from "../../Interface/Image/Onsharp.js";
import type Option from "../../Interface/Image/sharp.js";
/**
 * @module Image
 *
 */
export default interface Interface {
    (Option: Option, On: On): Promise<any>;
}
