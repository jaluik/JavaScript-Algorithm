// 4kyu
// Description:
// Give you a multiplication arithmetic expression:

//                 ABC
//             *   CBA
//             -------
//             = 39483
// Each character represents a diffrent digit(1-9), and you need to find the arithmetic expression and return the result like this:

// "123 * 321 = 39483"
// You can assume that the first line always contains all the digits that you need to guess. You can assume that all testcase always has one or more than one valid results. If more than one valid result exists, choose the one which has the smallest first number. In the example above, "321 * 123 = 39483" is also a valid result, but 321 > 123.

// Examples
// exp=
// `    ABC
// *   CBA
// -------
// = 39483`
// guessExpression(exp) === "123 * 321 = 39483"

// exp=
// `  AAA
// *   A
// ------
// = 444`
// guessExpression(exp) === "222 * 2 = 444"

// exp=
// `   AB
// * ABA
// ------
// = 1452`
// guessExpression(exp) === "12 * 121 = 1452"

// exp =
// `        BCEAD
// *      AEDBCA
// --------------
// = 13300171373`
// guessExpression(exp) === "92413 * 143921 = 13300171373"

function guessExpression(exp) {
  //coding and coding...
  let m1 = exp.match(/[a-zA-Z]+/g)[0];
  let m2 = exp.match(/[a-zA-Z]+/g)[1];
  let res = exp.match(/\d+/g)[0];
  let str = [...new Set((m1 + m2).split(""))].join("");

  return getNumber(m1, m2, res, str);

  function getNumber(m1, m2, res, str) {
    if (!/[a-zA-Z]/.test(str)) {
      return parseInt(m1) * parseInt(m2) === parseInt(res);
    }
    for (let i = 1; i < 10; i++) {
      if (!str.includes(i)) {
        a = str.match(/[a-zA-Z]/g)[0];
        let newStr = str.replace(a, i);
        let newM1 = m1;
        let newM2 = m2;
        while (newM1.includes(a)) {
          newM1 = newM1.replace(a, i);
        }
        while (newM2.includes(a)) {
          newM2 = newM2.replace(a, i);
        }

        let m = getNumber(newM1, newM2, res, newStr);
        if (m) {
          if (m === true) {
            return `${newM1} * ${newM2} = ${res}`;
          } else {
            return m;
          }
        }
      }
    }
    return false;
  }
}

let exp = ` AB
*  AABBBBB
-----------
= 18666656
`;

console.log(guessExpression(exp));
