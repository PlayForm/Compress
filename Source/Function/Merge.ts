/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
	mergeArrays: false,
}) satisfies Type<Generic> as Type<Generic>;

import type Type from "@Interface/Merge.js";
import type { Generic } from "@Interface/Merge.js";
