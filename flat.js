// 面試不能直接講.flat()

let array = [1, 2, [3, [4, 5, [6, 7, [8]]]]];

function flatten(arr) {
  // 不知道深度多少的話，傳入Infinity開大絕
  return arr.flat(Infinity);
}

const flattenArray = flatten(array);
// console.log(flattenArray); // [1,2,3,4,5,6,7,8]

// Solution 2
function flatten2(value) { // 假設已是array
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }

  return value;
}

console.log(flatten2([1,2,3]))
console.log(flatten2([
  [1, 2],
  [3, 4],
]))