import type { Pattern } from "@playform/pipe";

import type Option from "../Interface/Option.js";

/**
 * @module CLI
 *
 */
export default interface Interface {
	(File: Pattern[], Option?: Option): Promise<void>;
}
