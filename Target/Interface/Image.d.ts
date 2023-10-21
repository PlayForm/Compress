/**
 * @module Image
 *
 */
export default interface Type {
    (Option: Option, On: On): Promise<any>;
}
import type On from "../Interface/Image/On.js";
import type Option from "../Interface/Image/Option.js";
