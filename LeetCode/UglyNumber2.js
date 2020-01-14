// medium
// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example:

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:

// 1 is typically treated as an ugly number.
// n does not exceed 1690.

// 运用三指针法，记录当前2，3 ，5的状态，然后用res数组来保存整个长度
var nthUglyNumber = function(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 0,
    c = 0;
  res = [1];
  for (let i = 0; i < n; i++) {
    let min = Math.min(res[a] * 2, res[b] * 3, res[c] * 5);
    if (min === res[a] * 2) a++;
    if (min === res[b] * 3) b++;
    if (min === res[c] * 5) c++;
    res.push(min);
  }
  return res[n - 1];
};
