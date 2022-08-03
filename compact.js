const compact = (array) => {
  return array.filter(el => !!el)
}

console.log(compact([0, 1, false, 2, '', 3]))
// [1,2,3]