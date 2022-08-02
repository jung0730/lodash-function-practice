const chunk = (array, size) => {
  const length = array.length
  const result = new Array(Math.ceil(length / size)); //[, ]
  let index = 0
  let resIndex = 0
  while (index < length) {
    result[resIndex++] = array.slice(index, index += size) //含start不含end
    // result[0] = [a,b]
    // result[1] = [c,d]
  }
  return result
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));
// [[a,b], [c,d]]