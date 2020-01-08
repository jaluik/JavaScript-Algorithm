// normal
// Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

//

// Example 1:

// Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// Output: True
// Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
//

// Note:

// 1 <= k <= len(nums) <= 16.
// 0 < nums[i] < 10000.

// 利用桶的模型递归试错再回溯
var canPartitionKSubsets = function(nums, k) {
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % k !== 0) return false;
  let subSum = sum / k;
  nums = nums.sort((a, b) => a - b);
  let bucket = new Array(k).fill(subSum);
  return getResult(nums, bucket, nums.length - 1);

  function getResult(nums, bucket, cur) {
    if (cur < 0) {
      return true;
    }
    for (let i = 0; i < bucket.length; i++) {
      if (
        bucket[i] === nums[cur] ||
        (cur > 0 && bucket[i] - nums[cur] >= nums[0])
      ) {
        bucket[i] -= nums[cur];
        if (getResult(nums, bucket, cur - 1)) {
          return true;
        }
        bucket[i] += nums[cur];
      }
    }
    return false;
  }
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));
