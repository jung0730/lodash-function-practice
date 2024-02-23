function isEmpty(value) {
  if (value == null) {
    return true
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size === 0
  }
  
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  return true
}

console.log(isEmpty(false))
console.log(isEmpty(undefined))
console.log(isEmpty([1,2,3]))
console.log(isEmpty({a:1}))