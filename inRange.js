function inRange(value, start, end) {
  let s = start
  let e = end
  if (end === undefined) {
    e = start
    s = 0
  }
  if (start > end) {
    s = end;
    e = start
  }
  return value >= s && value < e
}

// function inRange(value, start, end = 0) {
//   return Math.min(start, end) <= value && value < Math.max(start, end);
// }

console.log(inRange(3,2))
console.log(inRange(-3,-2,-6))