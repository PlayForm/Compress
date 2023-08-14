const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(buffer) {
    if (pngSignature === buffer.toString("ascii", 1, 8)) {
      let chunkName = buffer.toString("ascii", 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = buffer.toString("ascii", 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(buffer) {
    if (buffer.toString("ascii", 12, 16) === pngFriedChunkName) {
      return {
        height: buffer.readUInt32BE(36),
        width: buffer.readUInt32BE(32)
      };
    }
    return {
      height: buffer.readUInt32BE(20),
      width: buffer.readUInt32BE(16)
    };
  }
};
export {
  PNG
};
