const fill = (array, value, start = 0, end = array.length) => {
  const length = array.length;
  if (start < 0) {
    start = length + start;
  }
  if (end < 0) {
    end = length + end;
  }
  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }
  return array
}

console.log(fill([1, 2, 3], 'a'))
console.log(fill([4, 6, 8, 10], '*', 1, 3))
console.log(fill([4, 6, 8, 10, 12], '*', -3, -1))