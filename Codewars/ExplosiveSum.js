// 4kyu
// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)#

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292
// function sum(num) {
//   function getAllNumber(n, m) {
//     if (m === 1) {
//       return 1;
//     }
//     if (n < m) {
//       return getAllNumber(n, n);
//     }
//     if (n === m) {
//       return 1 + getAllNumber(n, n - 1);
//     }
//     if (n > m) {
//       return getAllNumber(n, m - 1) + getAllNumber(n - m, m);
//     }
//   }
//   return getAllNumber(num, num);
// }

// 递归改动态规划
function sum(num) {
  if (num === 0) {
    return 0;
  }
  let array = [];
  for (let i = 0; i < num; i++) {
    array[i] = [];
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (j === 0 || i === 0) {
        array[i][j] = 1;
      } else {
        if (i > j) {
          array[i][j] = array[i][j - 1] + array[i - j - 1][j];
        } else if (i === j) {
          array[i][j] = 1 + array[i][j - 1];
        } else {
          array[i][j] = array[i][i];
        }
      }
    }
  }
  return array[num - 1][num - 1];
}

// best practice
var memo = [];

function sum(n, m = n) {
  if (n == 0) return 1;
  if (n < 0 || m == 0) return 0;
  if (memo[n] && memo[n][m]) return memo[n][m];
  let total = sum(n, m - 1) + sum(n - m, m);
  if (!memo[n]) {
    memo[n] = [];
  }
  memo[n][m] = total;
  return total;
}

console.log(sum(10));
