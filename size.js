function size(collection) {
  if (collection === null || collection === undefined) {
    return 0
  }

  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length
  }

  if (collection instanceof Set || collection instanceof Map) {
    return collection.size
  }

  if (typeof collection === 'object') {
    return Object.keys(collection).length
  }
}

console.log(size([1, 2, 3, 4, 5]))
console.log(size({ a: 1, b: 2 }))
console.log(size(
  new Map([
    [1, 2],
    [3, 4],
  ])
))