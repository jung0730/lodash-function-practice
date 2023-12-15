// excluding elements dropped from the beginning
// Elements are dropped until predicate returns falsey

const dropWhile = (array, predicate) => {
  let index;
  for (index = 0; index < array.length && predicate(array[index], index, array); index++) {
    // Continue iterating while the predicate is true and there are still elements in the array
  }

  return array.slice(index);
}

console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 0))