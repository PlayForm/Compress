import type sharp from "sharp";
export default interface IMG {
    [key: string]: sharp.AvifOptions | sharp.GifOptions | sharp.HeifOptions | sharp.JpegOptions | sharp.PngOptions | sharp.TiffOptions | sharp.WebpOptions;
    avif?: sharp.AvifOptions;
    gif?: sharp.GifOptions;
    heif?: sharp.HeifOptions;
    jpeg?: sharp.JpegOptions;
    png?: sharp.PngOptions;
    tiff?: sharp.TiffOptions;
    webp?: sharp.WebpOptions;
}
