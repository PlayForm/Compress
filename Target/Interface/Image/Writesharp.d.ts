/**
 * @module Image
 *
 */
export default interface Type {
    (Option: Option, On: On): Promise<any>;
}
import type On from "@Interface/Image/Onsharp.js";
import type Option from "@Interface/Image/sharp.js";
