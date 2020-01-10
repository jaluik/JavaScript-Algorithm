// medium
// Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

// Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

// Note: p consists of only lowercase English letters and the size of p might be over 10000.

// Example 1:
// Input: "a"
// Output: 1

// Explanation: Only the substring "a" of string "a" is in the string s.
// Example 2:
// Input: "cac"
// Output: 2
// Explanation: There are two substrings "a", "c" of string "cac" in the string s.
// Example 3:
// Input: "zab"
// Output: 6
// Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.

// 暴力破解法，时间复杂度太高了！
// var findSubstringInWraproundString = function(p) {
//   let bufferStr = "";
//   let array = [];
//   if (p.length === 1) return 1;
//   for (let i = 0; i < p.length; i++) {
//     let next = p[i].charCodeAt() === 122 ? 97 : p[i].charCodeAt() + 1;
//     if (p[i + 1] && p[i + 1].charCodeAt() === next) {
//       bufferStr += p[i];
//     } else {
//       bufferStr += p[i];
//       if (!array.includes(bufferStr)) {
//         array.push(bufferStr);
//       }
//       bufferStr = "";
//     }
//   }
//   let resArray = [];
//   for (let item of array) {
//     addSub(item, resArray);
//   }
//   return resArray.length;

//   function addSub(str, array) {
//     if (array.includes(str)) {
//       return;
//     } else {
//       for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//           if (array.includes(str.slice(i, j))) {
//             continue;
//           }
//           array.push(str.slice(i, j));
//         }
//       }
//     }
//   }
// };

// 使用一个hash表储存元素最大的子串，使用dp来计算元素子串长度
// var findSubstringInWraproundString = function(p) {
//   if (p.length == 0) return 0;
//   var hash = new Map(),
//     dp = [1];
//   hash.set(p[0], 1);
//   for (var i = 1; i < p.length; i++) {
//     if (
//       p[i].charCodeAt() - p[i - 1].charCodeAt() === 1 ||
//       (p[i] == "a" && p[i - 1] == "z")
//     ) {
//       dp[i] = dp[i - 1] + 1;
//     } else {
//       dp[i] = 1;
//     }
//     if (hash.has(p[i])) {
//       if (hash.get(p[i]) < dp[i]) {
//         hash.set(p[i], dp[i]);
//       }
//     } else {
//       hash.set(p[i], dp[i]);
//     }
//   }
//   var res = 0;
//   hash.forEach(function(val, index) {
//     res += val;
//   });
//   return res;
// };

// my answer
var findSubstringInWraproundString = function(p) {
  if (!p) return 0;
  if (p.length === 1) return 1;
  let mapCharToSubstrLength = {};
  mapCharToSubstrLength[p[0]] = 1;
  let currentLength = 1;
  for (let i = 1; i < p.length; i++) {
    if (
      p[i].charCodeAt() - p[i - 1].charCodeAt() === 1 ||
      (p[i] === "a" && p[i - 1] === "z")
    ) {
      currentLength++;
    } else {
      currentLength = 1;
    }
    mapCharToSubstrLength[p[i]] = Math.max(
      mapCharToSubstrLength[p[i]] || 1,
      currentLength
    );
  }
  let res = 0;
  for (let [key, value] of Object.entries(mapCharToSubstrLength)) {
    res += value;
  }
  return res;
};
console.log(
  findSubstringInWraproundString(
    "cdefghefghijklmnopqrstuvwxmnijklmnopqrstuvbcdefghijklmnopqrstuvwabcddefghijklfghijklmabcdefghijklmnopqrstuvwxymnopqrstuvwxyz"
  )
);
