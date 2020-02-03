function stringifyURL(string) {
  const arr = string.split('');

  const newArr = arr.map(item => {
    return item === " " ? '%20' : item
  })

  return newArr.join('')
}

console.log(stringifyURL('tauhida parveen'));
console.log(stringifyURL('www.thinkful.com /tauh ida parv een'));