// 4kyu
// Create a function that differentiates a polynomial for a given value of x.

// Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

// Assumptions:
// There will be a coefficient near each x, unless the coefficient equals 1 or -1.
// There will be an exponent near each x, unless the exponent equals 0 or 1.
// All exponents will be greater or equal to zero
// Examples:
// differenatiate("12x+2", 3)      ==>   returns 12
// differenatiate("x^2+3x+2", 3)   ==>   returns 9

// my answer
function differentiate(equation, point) {
  //Good luck
  if (!point || !equation) {
    return null;
  }
  let array = equation
    .split(/[+|-]/)
    .filter(item => {
      return item;
    })
    .map(item => {
      let res;
      item.replace(/([0-9]*)x\^?([0-9])*/g, function(match, p1, p2) {
        if (match) {
          p1 = p1 ? parseInt(p1) : 1;
          p2 = p2 ? parseInt(p2) : 1;
          res = p1 * p2 * point ** (p2 - 1);
        }
      });
      return res;
    });
  let signArray = equation.match(/[+|-]/g) || [];
  if (!signArray.length || signArray.length < array.length) {
    signArray.unshift("+");
  }
  let sum = 0;
  array.forEach((item, index) => {
    if (item) {
      signArray[index] === "+" ? (sum += item) : (sum -= item);
    }
  });

  return sum;
}

// best practice
function differentiate(equation, point) {
  const standardize = equation => {
    return equation
      .replace(/(?<=^|\+|-)(?=x)/g, "1")
      .replace(/(?<=\d+)$/, "x^0")
      .replace(/x(?=\+|-|$)/, "x^1")
      .split(/\+|(?=-)/)
      .map(term => term.split(/x\^/));
  };
  const derivative = ([coeff, exp]) => [coeff * exp, exp - 1];
  const evaluate = (sum, [coeff, exp]) => sum + coeff * point ** exp;
  return standardize(equation)
    .map(derivative)
    .reduce(evaluate, 0);
}

console.log(differentiate("-7x^5+22x^4-55x^3-94x^2+87x-56", -3));
