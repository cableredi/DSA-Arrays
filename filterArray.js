function filter(arr){
  const newArr = [];
  for (let i=0; i < arr.length; i++) {
      if (arr[i] >= 5) {
          newArr.push(arr[i])
      }
  }
  return newArr;
}

console.log(filter([1,3,4,5,6,7,8,11]));