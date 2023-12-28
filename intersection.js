// tips: set
function intersection(...arrays) {
  if (arrays.length === 0) {
    return []
  }
  const set = new Set(arrays[0]) // iterable
  arrays.forEach((arr, i) => {
    set.forEach((value) => {
      if (!arrays[i].includes(value)) {
        set.delete(value)
      }
    })
  })
  return [...set]
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];
console.log(intersection(arr1, arr2, arr3))