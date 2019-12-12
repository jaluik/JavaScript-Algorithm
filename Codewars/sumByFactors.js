// Given an array of positive or negative integers

// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// my answer
// function sumOfDivided(lst) {
//   function getPrimeList(number) {
//     number = Math.abs(number);
//     let primeList = [];
//     for (let i = 2; i <= number; i++) {
//       if (isPrime(i)) {
//         primeList.push(i);
//       }
//     }
//     return primeList;
//   }

//   function isPrime(number) {
//     if (number === 2) return true;
//     let newNumber = Math.ceil(number / 2);
//     for (let i = 2; i <= newNumber; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   let largeNumber = Math.max(...lst.map(Math.abs));
//   let list = getPrimeList(largeNumber);
//   return list
//     .map(item => {
//       let array = [];
//       lst.forEach(subItem => {
//         if (Math.abs(subItem) % item === 0) {
//           array.push(subItem);
//         }
//       });
//       let sum = array.reduce((a, b) => a + b, 0);
//       return array.length === 0 ? false : [item, sum];
//     })
//     .filter(item => item);
// }

// best practice   better！！
function sumOfDivided(lst) {
  if (lst.length == 0) {
    return [];
  }
  var m = Math.max.apply(null, lst.map(Math.abs)),
    primes = [],
    marked = Array(m + 1);

  for (var i = 2; i <= m; ++i) {
    if (marked[i]) continue;

    var sum = 0,
      isMul = false;
    lst.forEach(function(n) {
      if (n % i == 0) {
        sum += n;
        isMul = true;
      }
    });
    if (isMul) primes.push([i, sum]);

    // 优化后面需要遍历的次数
    // 排除掉后面为非素数的数
    for (var j = 2 * i; j <= m; j += i) {
      marked[j] = true;
    }
  }

  return primes;
}

console.log(
  sumOfDivided([
    53,
    94,
    -17,
    11,
    90,
    199,
    35,
    -4,
    81,
    192,
    103,
    -81,
    -48,
    174,
    -62,
    48
  ])
);
