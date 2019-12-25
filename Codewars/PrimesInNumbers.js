// 5kyu
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// my answer
function primeFactors(n) {
  if (n <= 2) {
    return "";
  }
  let array = [];
  //your code here
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      array.push(i);
      n = n / i;
    }
  }
  //   get formatted str
  if (array.length === 0) return "";
  let now = array[0];
  let index = 0;
  let str = "(";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === now) {
      index++;
    } else {
      if (index !== 1) {
        str += `${now}**${index})(`;
      } else {
        str += `${now})(`;
      }

      index = 1;
      now = array[i];
    }
    if (i === array.length - 1) {
      if (index !== 1) {
        str += `${now}**${index})`;
      } else {
        str += `${now})`;
      }
    }
  }
  return str;
}

// best practice
function primeFactors(n) {
  for (var i = 2, res = "", f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? "(" + (f > 1 ? i + "**" + f : i) + ")" : "";
  }
  return res || "(" + n + ")";
}

console.log(primeFactors(7775460));
