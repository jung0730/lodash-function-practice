const findIndex = (array, predicate, fromIndex = 0) => {
  const startIndex = fromIndex >= 0 ? fromIndex : array.length + fromIndex;

  for (let index = startIndex; index < array.length; index++) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

console.log(findIndex([5, 12, 8, 130, 44], (num) => num % 2 === 0))