// medium
// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// Example:

// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 我此处用的是递归调用
var combine = function(n, k) {
  if (k > n) return [];
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  let res = [];
  recursive(array, k, res, []);
  return res;

  function recursive(array, k, res, mid) {
    if (k === 0) {
      res.push(mid);
      return;
    }
    if (array.length === k) {
      res.push(mid.concat(array));
      return;
    }
    if (array.length < k) return;
    array = [...array];
    while (array.length > 0) {
      newMid = [...mid];
      let item = array.shift();
      newMid.push(item);
      recursive(array, k - 1, res, newMid);
    }
  }
};

console.log(combine(4, 2));
