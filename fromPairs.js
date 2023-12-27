// const fromPairs = (pairs) => {
//   return pairs.reduce((acc, cur) => {
//     const [key, value] = cur;
//     return {
//       ...acc,
//       [key]: value
//     }
//   }, {})
// }

// solution 2
// convert an array to an object
// const fromPairs = (pairs) => {
//   return Object.fromEntries(pairs)
// }

// solution 3
// const fromPairs = (pairs) => {
//   const result = {};
//   for (const[key, value] of pairs) {
//     result[key] = value;
//   }
//   return result;
// }

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
console.log(fromPairs(pairs))