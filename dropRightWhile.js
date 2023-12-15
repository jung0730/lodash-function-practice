//  excluding elements dropped from the end
// Elements are dropped until predicate returns falsey

const dropRightWhile = (array, predicate) => {
  let index;
  for (index = array.length - 1; index >= 0 && predicate(array[index], index, array); index--) {
    // Continue iterating while the predicate is true and there are still elements in the array
  }

  return array.slice(0, index + 1);
}

// Solution 2
// const dropRightWhile = (array, predicate) => {
//   let index = array.length - 1;
//   while (index >= 0 && predicate(array[index], index, array)) {
//     index--;
//   }
//   return array.slice(0, index + 1);
// }

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value < 3))
console.log(dropRightWhile([1, 2, 3], (value) => value < 6))
console.log(dropRightWhile([1, , 3, 4, 5], (value) => value === undefined))