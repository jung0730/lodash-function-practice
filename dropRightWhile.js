const dropRightWhile = (array, predicate) => {
  let index
  for (index = array.length - 1; index >= 0 && predicate(array[index], index, array); index--) {
    // Continue iterating while the predicate is true and there are still elements in the array
  }

  return array.slice(0, index + 1);
}

console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value < 0))
console.log(dropRightWhile([1, , 3, 4, 5], (value) => value === undefined))