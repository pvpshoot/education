function cleanArray(arr, count = 0) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arrLength === 0) {
    return newCount;
  }
  let newCount = count;
  const arrLength = arr.length;
  while (arr.length !== 0) {
    arr.splice(arrLength - 1);
    newCount++;
    cleanArray(arr, newCount);
  }
}
