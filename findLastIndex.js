const findLastIndex = (array, predicate, fromIndex = array.length - 1) => {
  const startIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex;

  for (let index = startIndex; index >= 0; index--) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

console.log(findLastIndex([5, 12, 8, 130, 44], (num) => num % 2 === 0))