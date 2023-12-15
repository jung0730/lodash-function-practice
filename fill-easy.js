const fill = (array, value) => {
  return new Array(array.length).fill(value)
}

console.log(fill([1,2,3],2))
// [2,2,2]