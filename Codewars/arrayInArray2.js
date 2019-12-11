// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// myAnswer
function inArray(array1, array2) {
  let returnArray = [];
  for (let item1 of array1) {
    for (let item2 of array2) {
      if (item2.includes(item1)) {
        returnArray.push(item1);
        break;
      }
    }
  }
  return returnArray.sort();
}

// best practice
function inArray(array1, array2) {
  return array1
    .filter(item => {
      return array2.some(item2 => {
        item2.includes(item);
      });
    })
    .sort();
}
