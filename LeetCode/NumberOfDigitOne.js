// hard
// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// Example:

// Input: 13
// Output: 6
// Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

// my anwer
// the main point is to divide the case of place of 1

var countDigitOne = function(n) {
  if (n <= 0) return 0;
  let number = 0;
  for (let i = 1; i <= n; i *= 10) {
    let divider = i * 10;
    number +=
      parseInt(n / divider) * i +
      Math.min(Math.max((n % divider) - i + 1, 0), i);
  }
  return number;
};

console.log(countDigitOne(1234));
