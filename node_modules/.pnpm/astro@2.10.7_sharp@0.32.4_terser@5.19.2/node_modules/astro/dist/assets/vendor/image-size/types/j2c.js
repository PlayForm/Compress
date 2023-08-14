const J2C = {
  validate(buffer) {
    return buffer.toString("hex", 0, 4) === "ff4fff51";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(12),
      width: buffer.readUInt32BE(8)
    };
  }
};
export {
  J2C
};
