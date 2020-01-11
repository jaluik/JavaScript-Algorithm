// medium
// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// my answer
var threeSumClosest = function(nums, target) {
  if (nums.length === 3) return nums.reduce((a, b) => a + b, 0);
  return getMax(nums, 3, target);
  function getMax(nums, number, target) {
    if (number <= 0) return 0;
    if (nums.length === number) return nums.reduce((a, b) => a + b, 0);
    let sum1 = getMax(nums.slice(1), number - 1, target - nums[0]) + nums[0];
    let sum2 = getMax(nums.slice(1), number, target);
    return Math.abs(sum1 - target) > Math.abs(sum2 - target) ? sum2 : sum1;
  }
};

// good
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return;
  nums.sort((a, b) => a - b);
  var res = nums[0] + nums[1] + nums[nums.length - 1];
  for (var middle = 1; middle < nums.length - 1; middle++) {
    var start = 0,
      end = nums.length - 1;
    while (start < middle && end > middle) {
      var result = nums[start] + nums[end] + nums[middle];
      if (Math.abs(target - result) < Math.abs(target - res)) res = result;
      if (result === target) {
        return result;
      }
      if (result < target) {
        start += 1;
      }
      if (result > target) {
        end -= 1;
      }
    }
  }
  return res;
};
