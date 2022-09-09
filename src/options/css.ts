import type {
	AfterCompressFn,
	BeforeCompressFn,
	CompressOptions,
	MinifyOptions,
	Usage,
} from "csso";

export default interface CSS extends MinifyOptions, CompressOptions {
	[key: string]: any;

	sourceMap?: boolean | undefined;

	filename?: string | undefined;

	debug?: boolean | undefined;

	beforeCompress?: BeforeCompressFn | BeforeCompressFn[] | undefined;

	afterCompress?: AfterCompressFn | AfterCompressFn[] | undefined;

	restructure?: boolean;

	forceMediaMerge?: boolean;

	clone?: boolean;

	comments?: string | boolean | undefined;

	usage?: Usage | undefined;

	logger?: () => {} | null;
}
