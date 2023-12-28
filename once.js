// tips: 要記住上一次值的，使用closure

function once(func) {
  let ranOnce = false
  let value
  return function (...args) { // 箭頭函式沒有自己的 this 值，箭頭函式的 this 值是在一開始定義時就決定，永遠會是最接近自己的外層的普通函式中的 this 值。此外，箭頭函式也不適合使用 call、 apply 和 bind 來綁定 this 值，綁定值會無效。
    if (!ranOnce) {
      value = func.apply(this, args) // args 本身為一個array
      ranOnce = true
    }
    return value
  }
}
let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce)
console.log(incrementByOnce(2))
console.log(incrementByOnce(4))