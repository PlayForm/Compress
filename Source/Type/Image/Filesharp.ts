/**
 * @module File
 *
 */
export type Type = keyof typeof _Map;

export type { Type as default };

export const { default: _Map } = await import(
	"../../Variable/Image/Mapsharp.js"
);
