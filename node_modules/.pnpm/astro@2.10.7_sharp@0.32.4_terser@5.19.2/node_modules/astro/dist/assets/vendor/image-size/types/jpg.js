import { readUInt } from "../readUInt.js";
const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
  return buffer.toString("hex", 2, 6) === EXIF_MARKER;
}
function extractSize(buffer, index) {
  return {
    height: buffer.readUInt16BE(index),
    width: buffer.readUInt16BE(index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(buffer, index) {
  const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = exifBlock.toString("hex", EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateBuffer(buffer, index) {
  if (index > buffer.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
  if (buffer[index] !== 255) {
    throw new TypeError("Invalid JPG, marker table corrupted");
  }
}
const JPG = {
  validate(buffer) {
    const SOIMarker = buffer.toString("hex", 0, 2);
    return "ffd8" === SOIMarker;
  },
  calculate(buffer) {
    buffer = buffer.slice(4);
    let orientation;
    let next;
    while (buffer.length) {
      const i = buffer.readUInt16BE(0);
      if (isEXIF(buffer)) {
        orientation = validateExifBlock(buffer, i);
      }
      validateBuffer(buffer, i);
      next = buffer[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(buffer, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      buffer = buffer.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};
export {
  JPG
};
