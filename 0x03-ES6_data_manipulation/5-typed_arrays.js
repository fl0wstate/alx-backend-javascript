export default function createInt8TypedArray(length, position, value) {
  // create the byte array
  const byteArray = new ArrayBuffer(length);
  // new Dataview that will help us set values to the byte array
  const setByteArray = new DataView(byteArray);
  // checking position is not out of rage
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // valid position should go on ahead and set the value
  // we are storing the value in int8 type which is one byte long
  setByteArray.setInt8(position, value);
  return setByteArray;
}
