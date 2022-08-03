const drop = (array, n=1) => {
  const num = Math.abs(n) //確保是正數
  if (num > array.length) return []
  return array.slice(num)
}

console.log(drop([1,2,3],-2)) // 從array[2] slice一個新array
// [3]