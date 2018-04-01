const circularBuffer = function (size) {
  let buffer = [];
  let maxBufferSize = size;
  return {
    read() {
      if (buffer.length === 0) throw new BufferEmptyError();
      return buffer.shift();
    },
    write(value) {
      if (!value) return;
      if (size === buffer.length) throw new BufferFullError();
      buffer.push(value);
    },
    forceWrite(value) {
      if (!value) return;
      if (buffer.length === maxBufferSize) this.read();
      buffer.push(value)
    },
    clear() {
      buffer.length = 0;
    },
  };
};

export default circularBuffer;
export class BufferFullError extends Error {}
export class BufferEmptyError extends Error {}
