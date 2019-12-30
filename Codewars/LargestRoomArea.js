// 4kyu
// Task
// You have been given a matrix filled with 1s and 0s, where 1 represents a wall, and 0 represents empty space.

// Your task is to find the largest room in the given matrix, i.e. the largest area filled only with 0s.

// Input/Output
// [input] 2D integer array rooms

// A rectangular matrix filled with 1s and 0s.

// [output] an integer

// The area of the largest room.

// Example
// For

// rooms = [[1,1,1,1,1,1],
//            [1,0,1,0,0,1],
//            [1,0,1,0,0,1],
//            [1,1,1,1,1,1]]```
// the output should be `4`.

//  For
// rooms = [[1, 0], [0, 1]]``` the output should be 1.

// my anser
function largestRoomArea(rooms) {
  //coding and coding..
  let max = 0;
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      let res = getArroundedNumber(rooms, i, j);
      if (res > max) {
        max = res;
      }
    }
  }
  return max;

  function getArroundedNumber(room, i, j) {
    if (room[i] === undefined || room[i][j] === 1 || room[i][j] === undefined) {
      return 0;
    }
    let total = 1;
    room[i][j] = 1;
    let a = getArroundedNumber(room, i + 1, j);
    let b = getArroundedNumber(room, i - 1, j);
    let c = getArroundedNumber(room, i, j + 1);
    let d = getArroundedNumber(room, i, j - 1);
    return total + a + b + c + d;
  }
}

// best practice
function largestRoomArea(rooms) {
  var fill = (i, j) =>
    (rooms[i] || [])[j] === 0
      ? (rooms[i][j] = 1) +
        fill(i - 1, j) +
        fill(i + 1, j) +
        fill(i, j - 1) +
        fill(i, j + 1)
      : 0;
  return rooms.reduce(
    (l, x, i) => x.reduce((l, x, j) => Math.max(l, fill(i, j)), l),
    0
  );
}
