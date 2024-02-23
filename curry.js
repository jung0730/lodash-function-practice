function curry(func) {
  return function curried(...args) {
    // when all the arguments have been provided, execute original func
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (arg) => {
      return arg === undefined
        // means the function is partially applied
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
    }
  };
}


function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Outputs: 6
console.log(curriedAdd(1, 2)(3)); // Outputs: 6
console.log(curriedAdd(1, 2, 3)); // Outputs: 6