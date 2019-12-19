//  4 kyu
// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// my answer
function multiply(a, b) {
  if (a === "0" || b === "0") {
    return "0";
  }
  let aArray = a.split("").reverse();
  let bArray = b.split("").reverse();
  let array = new Array(aArray.length + b.length);
  for (let i = 0; i < aArray.length; i++) {
    for (let j = 0; j < bArray.length; j++) {
      array[i + j] = array[i + j]
        ? array[i + j] + Number(aArray[i]) * Number(bArray[j])
        : Number(aArray[i]) * Number(bArray[j]);
    }
  }

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] && array[i] >= 10) {
      array[i + 1] += Math.floor(array[i] / 10);
      array[i] = array[i] % 10;
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) {
      array[i] = undefined;
    } else if (array[i] !== undefined) {
      flag = false;
      break;
    }
  }
  return array
    .filter(item => item !== undefined)
    .reverse()
    .join("");
}

console.log(multiply("9007199254740991", "9007199254740991"));
