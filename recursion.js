//power

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
console.log(power(4, 3));

//factorial

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));

//product of an array

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

//write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));

//fib

//my solution

// function fib(num){
//     let arr =[1,1]

//     function helper(x){
//         if(x===num) return
//         const newNum = arr[x-1] + arr[x]
//         arr.push(newNum)
//         return helper(x+1)
//     }

//     helper(1)
//     return arr[num-1]
// }

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("parth"));

function isPalindrome(str) {
  //base case if word has odd no of letters
  if (str.length === 1) return true;

  //base case if word has even no of letters
  if (str.length === 2) return str[0] === str[1];

  //recurse if letters at two ends are the same, else false
  if (str[0] == str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));

//

function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

//capitalize first

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(
    capitalizeFirst(arr.slice(1))
  );
}

console.log(capitalizeFirst(["car", "taco", "banana"]));

//

function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

//capitalize words

function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words));
console.log(capitalizeWords(["parth"]));
