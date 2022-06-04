export default interface IMG {
    [key: string]: any;
    fit?: {
        width?: number;
        height?: number;
    };
    /**
     * [avif]
     */
    avif?: {
        /**
         * quality, integer 1-100 (optional, default 50)
         */
        quality?: number;
        /**
         * use lossless compression (optional, default false)
         */
        lossless?: boolean;
        /**
         * CPU effort, between 0 (fastest) and 9 (slowest) (optional, default 4)
         */
        effort?: number;
        /**
         * set to '4:2:0' to use chroma subsampling (optional, default '4:4:4')
         */
        chromaSubsampling?: string;
    };
    /**
     * [gif]
     */
    gif?: {
        /**
         * maximum number of palette entries, including transparency, between 2 and 256 (optional, default 256)
         */
        colours?: number;
        /**
         * alternative spelling of options.colours (optional, default 256)
         */
        colors?: number;
        /**
         * CPU effort, between 1 (fastest) and 10 (slowest) (optional, default 7)
         */
        effort?: number;
        /**
         * level of Floyd-Steinberg error diffusion, between 0 (least) and 1 (most) (optional, default 1.0)
         */
        dither?: number;
        /**
         * number of animation iterations, use 0 for infinite animation (optional, default 0)
         */
        loop?: number;
        /**
         * delay(s) between animation frames (in milliseconds)
         */
        delay?: number | Array<number>;
        /**
         * force GIF output, otherwise attempt to use input format (optional, default true)
         */
        force?: boolean;
    };
    /**
     * [heif]
     */
    heif?: {
        /**
         * quality, integer 1-100 (optional, default 50)
         */
        quality?: number;
        /**
         * compression format: av1, hevc (optional, default 'av1')
         */
        compression?: string;
        /**
         * use lossless compression (optional, default false)
         */
        lossless?: boolean;
        /**
         * CPU effort, between 0 (fastest) and 9 (slowest) (optional, default 4)
         */
        effort?: number;
        /**
         * set to '4:2:0' to use chroma subsampling (optional, default '4:4:4')
         */
        chromaSubsampling?: string;
    };
    /**
     * [jpeg]
     */
    jpeg?: {
        /**
         * quality, integer 1-100 (optional, default 80)
         */
        quality?: number;
        /**
         * use progressive (interlace) scan (optional, default false)
         */
        progressive?: boolean;
        /**
         * set to '4:4:4' to prevent chroma subsampling otherwise defaults to '4:2:0' chroma subsampling/** (optional, default '4:2:0')
         */
        chromaSubsampling?: string;
        /**
         * optimise Huffman coding tables (optional, default true)
         */
        optimiseCoding?: boolean;
        /**
         * alternative spelling of optimiseCoding (optional, default true)
         */
        optimizeCoding?: boolean;
        /**
         * use mozjpeg defaults, equivalent to { trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3 } (optional, default false)
         */
        mozjpeg?: boolean;
        /**
         * apply trellis quantisation (optional, default false)
         */
        trellisQuantisation?: boolean;
        /**
         * apply overshoot deringing (optional, default false)
         */
        overshootDeringing?: boolean;
        /**
         * optimise progressive scans, forces progressive (optional, default false)
         */
        optimiseScans?: boolean;
        /**
         * alternative spelling of optimiseScans (optional, default false)
         */
        optimizeScans?: boolean;
        /**
         * quantization table to use, integer 0-8 (optional, default 0)
         */
        quantisationTable?: number;
        /**
         * alternative spelling of quantisationTable (optional, default 0)
         */
        quantizationTable?: number;
        /**
         * force JPEG output, otherwise attempt to use input format (optional, default true)
         */
        force?: boolean;
    };
    /**
     * [png]
     */
    png?: {
        /**
         * use progressive (interlace) scan (optional, default false)
         */
        progressive?: boolean;
        /**
         * zlib compression level, 0 (fastest, largest) to 9 (slowest, smallest) (optional, default 6)
         */
        compressionLevel?: number;
        /**
         * use adaptive row filtering (optional, default false)
         */
        adaptiveFiltering?: boolean;
        /**
         * quantise to a palette-based image with alpha transparency support (optional, default false)
         */
        palette?: boolean;
        /**
         * use the lowest number of colours needed to achieve given quality, sets palette to true (optional, default 100)
         */
        quality?: number;
        /**
         * CPU effort, between 1 (fastest) and 10 (slowest), sets palette to true (optional, default 7)
         */
        effort?: number;
        /**
         * maximum number of palette entries, sets palette to true (optional, default 256)
         */
        colours?: number;
        /**
         * alternative spelling of options.colours, sets palette to true (optional, default 256)
         */
        colors?: number;
        /**
         * level of Floyd-Steinberg error diffusion, sets palette to true (optional, default 1.0)
         */
        dither?: number;
        /**
         * force PNG output, otherwise attempt to use input format (optional, default true)
         */
        force?: boolean;
    };
    /**
     * [raw]
     */
    raw?: {
        /**
         * bit depth, one of: char, uchar (default), short, ushort, int, uint, float, complex, double, dpcomplex (optional, default 'uchar')
         */
        depth?: string;
    };
    /**
     * [tiff]
     */
    tiff?: {
        /**
         * quality, integer 1-100 (optional, default 80)
         */
        quality?: number;
        /**
         * force TIFF output, otherwise attempt to use input format (optional, default true)
         */
        force?: boolean;
        /**
         * compression options: lzw, deflate, jpeg, ccittfax4 (optional, default 'jpeg')
         */
        compression?: string;
        /**
         * compression predictor options: none, horizontal, float (optional, default 'horizontal')
         */
        predictor?: string;
        /**
         * write an image pyramid (optional, default false)
         */
        pyramid?: boolean;
        /**
         * write a tiled tiff (optional, default false)
         */
        tile?: boolean;
        /**
         * horizontal tile size (optional, default 256)
         */
        tileWidth?: number;
        /**
         * vertical tile size (optional, default 256)
         */
        tileHeight?: number;
        /**
         * horizontal resolution in pixels/mm (optional, default 1.0)
         */
        xres?: number;
        /**
         * vertical resolution in pixels/mm (optional, default 1.0)
         */
        yres?: number;
        /**
         * resolution unit options: inch, cm (optional, default 'inch')
         */
        resolutionUnit?: string;
        /**
         * reduce bitdepth to 1, 2 or 4 bit (optional, default 8)
         */
        bitdepth?: number;
    };
    /**
     * [webp]
     */
    webp?: {
        /**
         * quality, integer 1-100 (optional, default 80)
         */
        quality?: number;
        /**
         * quality of alpha layer, integer 0-100 (optional, default 100)
         */
        alphaQuality?: number;
        /**
         * use lossless compression mode (optional, default false)
         */
        lossless?: boolean;
        /**
         * use near_lossless compression mode (optional, default false)
         */
        nearLossless?: boolean;
        /**
         * use high quality chroma subsampling (optional, default false)
         */
        smartSubsample?: boolean;
        /**
         * CPU effort, between 0 (fastest) and 6 (slowest) (optional, default 4)
         */
        effort?: number;
        /**
         * number of animation iterations, use 0 for infinite animation (optional, default 0)
         */
        loop?: number;
        /**
         * delay(s) between animation frames (in milliseconds)
         */
        delay?: number | Array<number>;
        /**
         * force WebP output, otherwise attempt to use input format (optional, default true)
         */
        force?: boolean;
    };
}
