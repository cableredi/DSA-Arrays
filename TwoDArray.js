function TwoDArray(arr) {
  const M = arr.length;
  const N = arr[0].length;

  let rowFlag = false;
  let colFlag = false;

  //scan 1st row for 0
  for (let j = 0; j < N; j++) {
    if (arr[0][j] === 0) {
      rowFlag = true;
      break;
    }
  }

  //scan first column for 0
  for (let i = 0; i < M; i++) {
    if (arr[i][0] === 0) {
      colFlag = true;
      break;
    }
  }

  // process rest of the matrix and use first row & first column to mark if any cell in corresponding
  //row or column has value 0 or not
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (arr[i][j] === 0) {
        arr[0][j] = arr[i][0] = 0;
      }
    }
  }

  // if (0, j) or (i,0) is 0, assign 0 to cell (i, j)
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (arr[0][j] === 0 || arr[i][0] === 0) {
        arr[i][j] = 0;
      }
    }
  }

  // if rowFlag is true, then assign 0 to all cells in first row
  for (let i = 0; rowFlag && i < N; i++) {
    arr[0][i] = 0;
  }

  // if colFlag is true, then assign 0 to all cells in first column
  for (let i = 0; colFlag && i < M; i++) {
    arr[i][0] = 0;
  }

  return arr;
};

console.log( TwoDArray([[1,0,1,1,0], [0,1,1,1,0], [1,1,1,1,1], [1,0,1,1,1], [1,1,1,1,1]]) );