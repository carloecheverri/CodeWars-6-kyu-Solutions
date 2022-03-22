// what is the max sum from the consecutive number of elements
let matrix1 = [
  [3, 6, 8],
  [2, 0, 9],
  [3, 6, 1],
];

let matrix2 = [
  [0, -4, 17],
  [2, 0, 0],
  [3, 7, 23],
];

let matrix3 = [
  [3, 6, 8],
  [2, 0, 9],
  [3, 6, 1],
];

const maxInArray = (arr, num = 1) => {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let currSum = arr.slice(i, num + i).reduce((a, b) => a + b);
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
};
// console.log(maxConSum([4, 5, 1, 3, 2, 5], 1))
function maxInMatrix(matrix) {
  let maxElement = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    let currMax = maxInArray(matrix[i]);
    if (currMax > maxElement) {
      maxElement = currMax;
    }
  }
  return maxElement;
}
// console.log(maxInMatrix(matrix1));

function maxNConsecutiveElementsInMatrix(matrix, num) {
  // max el in the matrix
  let maxElement = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    let currMax = maxInArray(matrix[i], num);
    if (currMax > maxElement) {
      maxElement = currMax;
    }
  }
  return maxElement;
}
// console.log(maxNConsecutiveElementsInMatrix(matrix2, 2));

function maxStacked(matrix, stackSize = 2) {
  let maxStack = -Infinity;

  for (let i = 0; i <= matrix.length - stackSize; i++) {
    //  console.log(matrix.length - stackSize)
    for (let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[i].length)
      let columnArr = [];
      for (let m = 0; m < stackSize; m++) {
        columnArr.push(matrix[i + m][j]);
        // 
      }
      let currMax = columnArr.reduce((a, b) => a + b);
      if (currMax > maxStack) maxStack = currMax;
    }
  }
  return maxStack;
}
console.log(maxStacked(matrix3))