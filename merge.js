const object1 =  {
  'a': [{ 'b': 2 }, { 'd': 4 }]
}

const object2 = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
}

const object3 = {
  'b': [{ 'c': 1 }, { 'e': 3 }]
}

const merge = (object1, object2) => { // object is not iterable
  const result = {}
  for (let key of Object.keys(object2)) {
    const flattenObj1 = {}
    const flattenObj2 = {}
    object1[key].forEach(el => {
      for (let key in el) {
        flattenObj1[key] = el[key]
      }
    })
    object2[key].forEach(el => {
      for (let key in el) {
        flattenObj2[key] = el[key]
      }
    })
    result[key] = []
    result[key].push(flattenObj1, flattenObj2)
  }
  return result
}

console.log(merge(object1, object2))
// { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
// 順序有誤

// const merge = (object1, ...args) => { // rest parameters 把傳進去的object轉成iterable
  // for (let arg of args) { // iterable 才能使用for of
  //   for (let key in arg) {
  //     console.log(key)
  //   }
  // }
// }
// console.log(merge(object1, object2, object3))