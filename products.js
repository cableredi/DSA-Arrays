function products(arr) {
  const length = arr.length;

  const answer = [];

  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    answer[i] = arr[i - 1] * answer[i - 1];
  }

  let right = 1;
  for (let i = length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= arr[i];
  }

  return answer;

};

console.log(products([1, 3, 9, 4]));