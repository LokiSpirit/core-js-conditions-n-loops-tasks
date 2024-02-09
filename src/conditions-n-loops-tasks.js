/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const maxAB = a >= b ? a : b;
  const maxCAB = maxAB >= c ? maxAB : c;
  return maxCAB;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x && queen.y === king.y) return false;
  if (queen.x === king.x || queen.y === king.y) return true;

  let rowA = queen.x - 1;
  let colA = queen.y - 1;
  while (rowA >= 1 && colA >= 1) {
    if (rowA === king.x && colA === king.y) return true;
    rowA -= 1;
    colA -= 1;
  }

  let rowB = queen.x + 1;
  let colB = queen.y + 1;
  while (rowB < 9 && colB < 9) {
    if (rowB === king.x && colB === king.y) return true;
    rowB += 1;
    colB += 1;
  }

  let rowC = queen.x - 1;
  let colC = queen.y + 1;
  while (rowC > 0 && colC < 9) {
    if (rowC === king.x && colC === king.y) return true;
    rowC -= 1;
    colC += 1;
  }

  let rowD = queen.x + 1;
  let colD = queen.y - 1;
  while (rowD < 9 && colD > 0) {
    if (rowD === king.x && colD === king.y) return true;
    rowD += 1;
    colD -= 1;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b || a === c || b === c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      return false;
    }
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const units = num % 10;
  const dozens = (num - units) / 10;
  let str = '';
  if (units > 0 && units < 4) {
    for (let i = 1; i <= units; i += 1) {
      str += 'I';
    }
  } else if (units === 4) {
    str = 'IV';
  } else if (units >= 5 && units < 9) {
    str = 'V';
    for (let i = 1; i <= units - 5; i += 1) {
      str += 'I';
    }
  } else if (units === 9) {
    str = 'IX';
  }
  if (dozens === 0) {
    return str;
  }
  let result = '';
  for (let i = 1; i <= dozens; i += 1) {
    result += 'X';
  }
  return result + str;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      default:
        result += 'point';
    }
    result += ' ';
  }
  let final = '';
  for (let i = 0; i < result.length - 1; i += 1) {
    final += result[i];
  }
  return final;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let k = 0;
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== str[k]) {
      return false;
    }
    k += 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  if (digit === num) return true;
  let divider = 1;
  let per = 10;
  let minus = 0;
  let d = ((num % per) - minus) / divider;
  while (num - (num % (per / 10)) > 0) {
    if (digit !== d) {
      minus = num % per;
      per *= 10;
      divider *= 10;
      d = ((num % per) - minus) / divider;
    } else {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length - 1; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
  }
  let content = 1;
  let round = 0;
  let end = size - 1;
  const total = size * size;
  while (content <= total) {
    for (let j = round; j <= end; j += 1) {
      arr[round][j] = content;
      content += 1;
    }
    for (let k = round + 1; k <= end; k += 1) {
      arr[k][end] = content;
      content += 1;
    }
    for (let l = end - 1; l >= round; l -= 1) {
      arr[end][l] = content;
      content += 1;
    }
    for (let up = end - 1; up > round; up -= 1) {
      arr[up][round] = content;
      content += 1;
    }
    round += 1;
    end -= 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = matrix;
  const copyMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    copyMatrix[i] = [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      copyMatrix[i][j] = matrix[i][j];
    }
  }
  const last = matrix.length - 1;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      result[j][last - i] = copyMatrix[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
/* function swap(massive, left, right) {
  const array = massive;
  const tempLeft = massive[left];
  const tempRight = massive[right];
  array[left] = tempRight;
  array[right] = tempLeft;
}
function partitioning(leftPointer, rightPointer, base, arr) {
  let left = leftPointer;
  let right = rightPointer;
  while (left <= right) {
    while (left <= base && arr[left] <= arr[base]) {
      left += 1;
    }
    while (right >= base && arr[right] >= arr[base]) {
      right += 1;
    }
    if (left < right) {
      swap(arr, left, right);
      left += 1;
      right -= 1;
    }
  }
  return [right, left];
} */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
  /* let leftPointer = 0;
  let rightPointer = arr.length - 1;
  const base = Math.floor((rightPointer + leftPointer) / 2);
  while (true) {
    let [left, right] = partitioning(leftPointer, rightPointer, base, arr);
    leftPointer = 0;
    rightPointer = left;
  } */
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const copy = str;
  const len = copy.length;
  let count = 0;
  if (!copy || copy.length < 3 || iterations === 0) {
    return copy;
  }
  let initial = [];
  const etalon = [];
  const save = [];
  for (let i = 0; i < copy.length; i += 1) {
    initial[i] = i;
    etalon[i] = i;
  }
  for (let i = 0; i < iterations; i += 1) {
    const result = [];
    let index = 0;
    let j = 0;
    while (j < len) {
      result[index] = initial[j];
      index += 1;
      j += 2;
    }
    let k = 1;
    while (k < len) {
      result[index] = initial[k];
      k += 2;
      index += 1;
    }
    save[i] = result;
    initial = result;
    count += 1;
    let flag = true;
    for (let p = 0; p < len; p += 1) {
      if (etalon[p] !== initial[p]) {
        flag = false;
      }
    }
    if (flag) {
      const left = iterations % count;
      initial = save[left - 1];
      break;
    }
  }
  let s = '';
  for (let t = 0; t < len; t += 1) {
    s += copy[initial[t]];
  }
  return s;
}
/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (number < 12) return number;
  let copy = number;
  const arr = [];
  let count = 0;
  let i = 10;
  let divider = 1;
  let num = 0;
  while (copy !== 0) {
    num = copy % i;
    arr[count] = num / divider;
    divider *= 10;
    i *= 10;
    count += 1;
    copy -= num;
  }
  arr.reverse();
  const arrCopy = [];
  for (let j = 0; j < arr.length; j += 1) {
    arrCopy[j] = arr[j];
  }
  let pivot = arr[arr.length - 1];
  for (let j = arrCopy.length - 2; j >= 0; j -= 1) {
    if (pivot <= arr[j]) {
      pivot = arr[j];
    } else {
      const sorted = [];
      for (let h = j + 1; h < arr.length; h += 1) {
        sorted[h] = arr[h];
      }
      sorted.sort((item1, item2) => item1 - item2);
      const ind = sorted.findIndex((item) => item > arr[j]);
      const bigger = sorted[ind];
      sorted[ind] = arr[j];
      const res = [];
      for (let l = 0; l < j; l += 1) {
        res[l] = arr[l];
      }
      res.push(bigger);
      for (let l = 0; l < sorted.length; l += 1) {
        res.push(sorted[l]);
      }
      return +res.join('');
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
