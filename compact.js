// const compact = (array) => {
//   return array.filter(el => !!el)
// }

const compact = (array) => {
  return array.filter(Boolean)
}

console.log(compact([0, 1, false, 2, '', 3]))
// [1,2,3]