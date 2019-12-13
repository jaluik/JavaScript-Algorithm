// 5kyu
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

// my answer
function score(dice) {
  // Fill me in!
  let scoreObj = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200
  };
  let sum = 0;
  dice.sort((a, b) => a - b);
  for (let i = 0; i < dice.length; i++) {
    if (i < dice.length - 2) {
      if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2]) {
        sum += scoreObj[dice[i].toString()];
        dice[i] = null;
        dice[i + 1] = null;
        dice[i + 2] = null;
      }
    }
    if (dice[i] === 1) {
      sum += 100;
    }
    if (dice[i] === 5) {
      sum += 50;
    }
  }
  return sum;
}
