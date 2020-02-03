function mergeArray(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  return mergedArray.sort( (a,b) => {
    return a - b
  });
};

console.log(mergeArray([1, 3, 6, 8, 11],  [2, 3, 5, 8, 9, 10]));