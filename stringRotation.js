function stringRotate(str1, str2) {
  str1 = str1.split('');
  str2 = str2.split('');
  let isRotation = false;

  for (let i = 0; i < str1.length; i++) {
      let first = str1.shift();
      str1.push(first);
      if (str1.join('') === str2.join('')) {
          isRotation = true;
      }
  }
  return isRotation;
}

console.log(stringRotate('amazon', 'azonam'));
console.log(stringRotate('amazon', 'azonma'));