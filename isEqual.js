function deepEqual(valueA, valueB) {
  // check primitives, similar to === operator
  if (Object.is(valueA, valueB)) {
    return true
  }

  const bothObjects = Object.prototype.toString.call(valueA) === '[object Object]' &&
  Object.prototype.toString.call(valueB) === '[object Object]'

  const bothArrays = Array.isArray(valueA) && Array.isArray(valueB)
  // 排除兩個都是物件 和 兩個都是陣列 外的type
  if (!bothObjects && !bothArrays) {
    return false
  }

  if (Object.keys(valueA).length !== Object.keys(valueB).length) {
    return false
  }

  for (const key in valueA) { // for in outpus key; for of outputs value
    if (!deepEqual(valueA[key], valueB[key])) {
      return false
    }
  }
  return true
}

// console.log(deepEqual({ id: 1 }, { id: 1 }))
// console.log(deepEqual([1, 2, 3], [1, 2, 3]))
console.log(deepEqual([{ id: '1' }], [{ id: '2' }]))


// Object.prototype.toString.call() is used to get a string representation of the internal [[Class]] property of the values
// Object.prototype.toString.call([]) returns "[object Array]"
// Object.prototype.toString.call(new Date()) returns "[object Date]"
// Object.prototype.toString.call({}) returns "[object Object]"
