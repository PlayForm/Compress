export default interface IMG {
	[key: string]: any;

	/**
	 * [avif]
	 */
	avif?: {
		/**
		 * Quality, integer 1-100
		 * @default 50
		 */
		quality?: number;

		/**
		 * Use lossless compression
		 * @default false
		 */
		lossless?: boolean;

		/**
		 * CPU effort, between 0 (fastest) and 9 (slowest)
		 * @default 4
		 */
		effort?: number;

		/**
		 * Set to '4:2:0' to use chroma subsampling
		 * @default '4:4:4'
		 */
		chromaSubsampling?: string;
	};

	/**
	 * [gif]
	 */
	gif?: {
		/**
		 * Maximum number of palette entries, including transparency, between 2 and 256
		 * @default 256
		 */
		colours?: number;

		/**
		 * Alternative spelling of options.colours
		 * @default 256
		 */
		colors?: number;

		/**
		 * CPU effort, between 1 (fastest) and 10 (slowest)
		 * @default 7
		 */
		effort?: number;

		/**
		 * Level of Floyd-Steinberg error diffusion, between 0 (least) and 1 (most)
		 * @default 1.0
		 */
		dither?: number;

		/**
		 * Number of animation iterations, use 0 for infinite animation
		 * @default 0
		 */
		loop?: number;

		/**
		 * Delay(s) between animation frames (in milliseconds)
		 */
		delay?: number | Array<number>;

		/**
		 * Force GIF output, otherwise attempt to use input format
		 * @default true
		 */
		force?: boolean;
	};

	/**
	 * [heif]
	 */
	heif?: {
		/**
		 * Quality, integer 1-100
		 * @default 50
		 */
		quality?: number;

		/**
		 * Compression format: av1, hevc
		 * @default 'av1'
		 */
		compression?: string;

		/**
		 * Use lossless compression
		 * @default false
		 */
		lossless?: boolean;

		/**
		 * CPU effort, between 0 (fastest) and 9 (slowest)
		 * @default 4
		 */
		effort?: number;

		/**
		 * Set to '4:2:0' to use chroma subsampling
		 * @default '4:4:4'
		 */
		chromaSubsampling?: string;
	};

	/**
	 * [jpeg]
	 */
	jpeg?: {
		/**
		 * Quality, integer 1-100
		 * @default 80
		 */
		quality?: number;

		/**
		 * Use progressive (interlace) scan
		 * @default false
		 */
		progressive?: boolean;

		/**
		 * Set to '4:4:4' to prevent chroma subsampling otherwise defaults to '4:2:0' chroma subsampling/**
		 * @default '4:2:0'
		 */
		chromaSubsampling?: string;

		/**
		 * Optimise Huffman coding tables
		 * @default true
		 */
		optimiseCoding?: boolean;

		/**
		 * Alternative spelling of optimiseCoding
		 * @default true
		 */
		optimizeCoding?: boolean;

		/**
		 * Use mozjpeg defaults, equivalent to { trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3 }
		 * @default false
		 */
		mozjpeg?: boolean;

		/**
		 * Apply trellis quantisation
		 * @default false
		 */
		trellisQuantisation?: boolean;

		/**
		 * Apply overshoot deringing
		 * @default false
		 */
		overshootDeringing?: boolean;

		/**
		 * Optimise progressive scans, forces progressive
		 * @default false
		 */
		optimiseScans?: boolean;

		/**
		 * Alternative spelling of optimiseScans
		 * @default false
		 */
		optimizeScans?: boolean;

		/**
		 * Quantization table to use, integer 0-8
		 * @default 0
		 */
		quantisationTable?: number;

		/**
		 * Alternative spelling of quantisationTable
		 * @default 0
		 */
		quantizationTable?: number;

		/**
		 * Force JPEG output, otherwise attempt to use input format
		 * @default true
		 */
		force?: boolean;
	};

	/**
	 * [png]
	 */
	png?: {
		/**
		 * Use progressive (interlace) scan
		 * @default false
		 */
		progressive?: boolean;

		/**
		 * Zlib compression level, 0 (fastest, largest) to 9 (slowest, smallest)
		 * @default 6
		 * @default astro-compress: 9
		 */
		compressionLevel?: number;

		/**
		 * Use adaptive row filtering
		 * @default false
		 */
		adaptiveFiltering?: boolean;

		/**
		 * Quantise to a palette-based image with alpha transparency support
		 * @default false
		 * @default astro-compress: true
		 */
		palette?: boolean;

		/**
		 * Use the lowest number of colours needed to achieve given quality, sets palette to true
		 * @default 100
		 */
		quality?: number;

		/**
		 * CPU effort, between 1 (fastest) and 10 (slowest), sets palette to true
		 * @default 7
		 */
		effort?: number;

		/**
		 * Maximum number of palette entries, sets palette to true
		 * @default 256
		 */
		colours?: number;

		/**
		 * Alternative spelling of options.colours, sets palette to true
		 * @default 256
		 */
		colors?: number;

		/**
		 * Level of Floyd-Steinberg error diffusion, sets palette to true
		 * @default 1.0
		 */
		dither?: number;

		/**
		 * Force PNG output, otherwise attempt to use input format
		 * @default true
		 */
		force?: boolean;
	};

	/**
	 * [raw]
	 */
	raw?: {
		/**
		 * Bit depth, one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex
		 * @default 'uchar'
		 */
		depth?: string;
	};

	/**
	 * [tiff]
	 */
	tiff?: {
		/**
		 * Quality, integer 1-100
		 * @default 80
		 */
		quality?: number;

		/**
		 * Force TIFF output, otherwise attempt to use input format
		 * @default true
		 */
		force?: boolean;

		/**
		 * Compression options: lzw, deflate, jpeg, ccittfax4
		 * @default 'jpeg'
		 */
		compression?: string;

		/**
		 * Compression predictor options: none, horizontal, float
		 * @default 'horizontal'
		 */
		predictor?: string;

		/**
		 * Write an image pyramid
		 * @default false
		 */
		pyramid?: boolean;

		/**
		 * Write a tiled tiff
		 * @default false
		 */
		tile?: boolean;

		/**
		 * Horizontal tile size
		 * @default 256
		 */
		tileWidth?: number;

		/**
		 * Vertical tile size
		 * @default 256
		 */
		tileHeight?: number;

		/**
		 * Horizontal resolution in pixels/mm
		 * @default 1.0
		 */
		xres?: number;

		/**
		 * Vertical resolution in pixels/mm
		 * @default 1.0
		 */
		yres?: number;

		/**
		 * Resolution unit options: inch, cm
		 * @default 'inch'
		 */
		resolutionUnit?: string;

		/**
		 * Reduce bitdepth to 1, 2 or 4 bit
		 * @default 8
		 */
		bitdepth?: number;
	};

	/**
	 * [webp]
	 */
	webp?: {
		/**
		 * Quality, integer 1-100
		 * @default 80
		 */
		quality?: number;

		/**
		 * Quality of alpha layer, integer 0-100
		 * @default 100
		 */
		alphaQuality?: number;

		/**
		 * Use lossless compression mode
		 * @default false
		 */
		lossless?: boolean;

		/**
		 * Use near_lossless compression mode
		 * @default false
		 */
		nearLossless?: boolean;

		/**
		 * Use high quality chroma subsampling
		 * @default false
		 */
		smartSubsample?: boolean;

		/**
		 * CPU effort, between 0 (fastest) and 6 (slowest)
		 * @default 4
		 */
		effort?: number;

		/**
		 * Number of animation iterations, use 0 for infinite animation
		 * @default 0
		 */
		loop?: number;

		/**
		 * Delay(s) between animation frames (in milliseconds)
		 */
		delay?: number | Array<number>;

		/**
		 * Force WebP output, otherwise attempt to use input format
		 * @default true
		 */
		force?: boolean;
	};
}
