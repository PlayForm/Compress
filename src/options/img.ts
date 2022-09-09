export default interface IMG {
	[key: string]: any;

	avif?: {
		quality?: number;

		lossless?: boolean;

		effort?: number;

		chromaSubsampling?: string;
	};

	gif?: {
		colours?: number;

		colors?: number;

		effort?: number;

		dither?: number;

		loop?: number;

		delay?: number | Array<number>;

		force?: boolean;
	};

	heif?: {
		quality?: number;

		compression?: string;

		lossless?: boolean;

		effort?: number;

		chromaSubsampling?: string;
	};

	jpeg?: {
		quality?: number;

		progressive?: boolean;

		chromaSubsampling?: string;

		optimiseCoding?: boolean;

		optimizeCoding?: boolean;

		mozjpeg?: boolean;

		trellisQuantisation?: boolean;

		overshootDeringing?: boolean;

		optimiseScans?: boolean;

		optimizeScans?: boolean;

		quantisationTable?: number;

		quantizationTable?: number;

		force?: boolean;
	};

	png?: {
		progressive?: boolean;

		compressionLevel?: number;

		adaptiveFiltering?: boolean;

		palette?: boolean;

		quality?: number;

		effort?: number;

		colours?: number;

		colors?: number;

		dither?: number;

		force?: boolean;
	};

	raw?: {
		depth?: string;
	};

	tiff?: {
		quality?: number;

		force?: boolean;

		compression?: string;

		predictor?: string;

		pyramid?: boolean;

		tile?: boolean;

		tileWidth?: number;

		tileHeight?: number;

		xres?: number;

		yres?: number;

		resolutionUnit?: string;

		bitdepth?: number;
	};

	webp?: {
		quality?: number;

		alphaQuality?: number;

		lossless?: boolean;

		nearLossless?: boolean;

		smartSubsample?: boolean;

		effort?: number;

		loop?: number;

		delay?: number | Array<number>;

		force?: boolean;
	};
}
