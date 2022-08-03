const difference = (array1, array2) => {
  const array2Set = new Set(array2) // [2,3]
  return array1.filter(el => !array2Set.has(el))
}

console.log(difference([2,1], [2,3]))
// [1]