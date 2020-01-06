// 4kyu
// That's terrible! Some evil korrigans have abducted you during your sleep and threw you into a maze of thorns in the scrubland D:
// But have no worry, as long as you're asleep your mind is floating freely in the sky above your body.

// Seeing the whole maze from above in your sleep, can you remember the list of movements you'll have to do to get out when you awake?

// Input
// You are given the whole maze maze as a 2D grid, more specifically in your language:

// an array of strings

// maze[0][0] is the top left-hand corner

// maze[maze.length - 1][maze[0].length - 1] is the bottom right-hand corner

// Inside this 2D grid:

// ' ' is some walkable space
// '#' is a thorn bush (you can't pass through)
// '^', '<', 'v' or '>' is your sleeping body facing respectively the top, left, bottom or right side of the map.
// Output
// Write the function escape that returns the list/array of moves you need to do relatively to the direction you're facing in order to escape the maze (you won't be able to see the map when you wake up). as an array of the following instructions:

// 'F' move one step forward
// 'L' turn left
// 'R' turn right
// 'B' turn back
// Note: 'L','R', and 'B' ONLY perform a rotation and will not move your body

// If the maze has no exit, return an empty array.

// This is a real maze, there is no "escape" point. Just reach the edge of the map and you're free!
// You don't explicitely HAVE to find the shortest possible route, but you're quite likely to timeout if you don't ;P
// Aside from having no escape route the mazes will all be valid (they all contain one and only one "body" character and no other characters than the body, "#" and " ". Besides, the map will always be rectangular, you don't have to check that either)

// my answer
function escape(maze) {
  // store h and w
  let h = maze.length;
  let w = maze[0].length;

  // find start & direction
  let start;
  maze.forEach((row, y) => {
    row.split("").forEach((c, x) => {
      if (/[v|>|^|<]/.test(c)) start = [x, y];
    });
  });
  let dirHash = { "^": 0, ">": 1, v: 2, "<": 3 };
  let dir = dirHash[maze[start[1]][start[0]]];

  // have we escaped?
  function outside(x, y) {
    return x > w - 1 || y > h - 1 || x < 0 || y < 0;
  }

  // solver setup
  let history = [];
  let visited = Array.from({ length: h }, () =>
    Array.from({ length: w }, () => 0)
  );
  let solution = [];

  // solver
  function solver(x, y, dir, history) {
    // if we've escaped
    if (outside(x, y)) return history;

    // mark visited
    visited[y][x] = 1;

    // direction vectors
    let dirVectors = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0]
    ];

    // iterate F, RF, LF, B
    let turnArray = [0, 1, -1, 2];

    for (let index = 0; index < 4; index += 1) {
      let newDir = dir + turnArray[index];
      if (newDir > 3) newDir -= 4;
      if (newDir < 0) newDir += 4;

      let vec = dirVectors[newDir];
      let [nextX, nextY] = [x + vec[0], y + vec[1]];

      // if not wall and not visited
      if (
        outside(nextX, nextY) ||
        (maze[nextY][nextX] == " " && visited[nextY][nextX] == 0)
      ) {
        // recurse
        let thisMove = [["F"], ["R", "F"], ["L", "F"], ["B", "F"]][index];
        let newHistory = history.concat(thisMove);
        let result = solver(nextX, nextY, newDir, newHistory);
        if (result.length !== 0) return result;
      }
    }
    return [];
  }
  let output = solver(start[0], start[1], dir, history);
  return output;
}
