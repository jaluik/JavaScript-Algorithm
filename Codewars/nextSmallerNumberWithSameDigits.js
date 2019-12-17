// 4kyu
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

// my answer
function nextSmaller(n) {
  let array = n.toString().split("");
  if (array.length === 1) return -1;
  for (let i = array.length - 2; i >= 0; i--) {
    if (Number(array[i]) > Number(array[i + 1])) {
      let leftArray = array.splice(0, i);
      let rightArray = array.splice(1);
      rightArray.sort((a, b) => b - a);
      for (let j = 0; j < rightArray.length; j++) {
        if (
          Number(rightArray[j]) < Number(array[0]) &&
          !(leftArray.length === 0 && rightArray[j] === "0")
        ) {
          let tem = array[0];
          array[0] = rightArray[j];
          rightArray[j] = tem;

          leftArray.push(array[0]);
          return Number(leftArray.concat(rightArray).join(""));
        }
      }
    }
  }
  return -1;
}

console.log(nextSmaller(76357));
