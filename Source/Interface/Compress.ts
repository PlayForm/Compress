import type Cache from "@playform/pipe/Target/Interface/Cache";

/**
 * @module Compress
 *
 */
export default interface Interface {
	(
		Cache: Cache,
		Logger: unknown,
		Path: unknown,
		_Map: unknown,
		Type: unknown,
		Exclude: unknown,
		Action: unknown,
	): Promise<void>;
}
