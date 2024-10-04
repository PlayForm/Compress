import type Option from "../Interface/Option.js";

/**
 * @module CLI
 *
 */
export default interface Interface {
	(Option?: Option): Promise<void>;
}
