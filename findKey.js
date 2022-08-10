const users = {
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true },
  'barney':  { 'age': 36, 'active': true },
};

const predicate = ({age}) => {
  return age < 40
}

const findKey = (object, predicate) => { // 測試Array中是否至少有一個元素, 回傳boolean
  let result
  Object.keys(object).some(key => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
  })
  return result
}

console.log(findKey(users, predicate));
// pebbles (回傳第一個符合的key)