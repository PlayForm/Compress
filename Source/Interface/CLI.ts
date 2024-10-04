import type OptionPipe from "@playform/pipe/Target/Interface/Option.js";

import type Option from "../Interface/Option.js";

/**
 * @module CLI
 *
 */
export default interface Interface {
	(File: OptionPipe["File"], Option?: Option): Promise<void>;
}
