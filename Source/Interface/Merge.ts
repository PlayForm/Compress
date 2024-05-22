/**
 * @module Merge
 *
 * Represents a generic interface for deep merging objects using merge functions defined in DeepMergeFunctionsURIs.
 *
 * @template PMF - A type parameter representing Partial<DeepMergeFunctionsURIs>.
 *
 */
export default interface Interface<
	PMF extends Partial<DeepMergeFunctionsURIs>,
> {
	/**
	 * Merges multiple objects of type Ts using the provided merge functions and built-in metadata.
	 *
	 * @param ...Objects - An arbitrary number of objects to be merged.
	 *
	 */
	<Ts extends readonly unknown[]>(
		...Objects: Ts
	): DeepMergeHKT<
		Ts,
		GetDeepMergeFunctionsURIs<PMF>,
		DeepMergeBuiltInMetaData
	>;
}

export interface Generic {
	DeepMergeArraysURI: DeepMergeLeafURI;
}

import type {
	DeepMergeBuiltInMetaData,
	DeepMergeHKT,
	DeepMergeLeafURI,
	DeepMergeFunctionsURIs,
	GetDeepMergeFunctionsURIs,
} from "deepmerge-ts";
