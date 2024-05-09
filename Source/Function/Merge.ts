/**
 * @module Merge
 *
 */
export default (await import("deepmerge-ts")).deepmergeCustom<Generic>({
	mergeArrays: false,
}) satisfies Interface<Generic> as Interface<Generic>;

import type Interface from "../Interface/Merge.js";
import type { Generic } from "../Interface/Merge.js";
