// medium
// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

// my answer
var merge = function(intervals) {
  if (!intervals || intervals.length <= 1) return intervals;
  // sort by start point
  const newIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  let i1 = intervals.shift();
  let i2 = intervals.shift();
  while (i2) {
    // console.log('compare', i1, ' with ', i2);
    if (i1[1] >= i2[0]) {
      // could merge, get max endpoint
      i1[1] = Math.max(i1[1], i2[1]);
    } else {
      // i1 could not be merged, push to res
      res.push(i1);
      // check next
      i1 = i2;
    }
    // get next
    i2 = intervals.shift();
  }
  // push last one
  res.push(i1);
  return res;
};
