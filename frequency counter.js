//frequency counter pattern - 0(n)

//write a function called same, which accepts two arrays. The function should return true if every
//value in the functino array has its corresponding value squared in the second array.
//the frequency of values must be the same

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word , phrase or name formed by rearranging the letters of another, such as 'cinema' form 'iceman'

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Count = {};
  let str2Count = {};
  for (let char of str1) {
    str1Count[char] = (str1Count[char] || 0) + 1;
  }
  for (let char of str2) {
    str2Count[char] = (str2Count[char] || 0) + 1;
  }

  // for (let key in str1Count) {
  //   if (!(key in str2Count)) {
  //     return false;
  //   }
  //   if (str1Count[key] !== str2Count[key]) {
  //     return false;
  //   }
  // }

  //simpler solution

  for (let char of str1) {
    if (str1Count[char] !== str2Count[char]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("aweseom", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("textwisttime", "timetwisttext"));
