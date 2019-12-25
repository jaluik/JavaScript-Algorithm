// 4kyu
// When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

// Write a function: simplify, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

// All possible sums and subtraction of equivalent monomials ("xy==yx") has been done, e.g.:
// "cb+cba" -> "bc+abc", "2xy-yx" -> "xy", "-a+5ab+3a-c-2a" -> "-c+5ab"

// All monomials appears in order of increasing number of variables, e.g.:
// "-abc+3a+2ac" -> "3a+2ac-abc", "xyz-xz" -> "-xz+xyz"

// If two monomials have the same number of variables, they appears in lexicographic order, e.g.:
// "a+ca-ab" -> "a-ab+ac", "xzy+zby" ->"byz+xyz"

// There is no leading + sign if the first coefficient is positive, e.g.:
// "-y+x" -> "x-y", but no restrictions for -: "y-x" ->"-x+y"

// N.B. to keep it simplest, the string in input is restricted to represent only multilinear non-constant polynomials, so you won't find something like `-3+yx^2'. Multilinear means in this context: of degree 1 on each variable.

// Warning: the string in input can contain arbitrary variables represented by lowercase characters in the english alphabet.

// my answer
// function simplify(poly) {
//   //your code here
//   if (!poly.startsWith("-")) {
//     poly = "+" + poly;
//   }
//   let array = poly.match(/[\-|\+][0-9]*[a-z]+/g);
//   array = array.map(item => {
//     let a = item.split("");
//     let start = a.shift(0);
//     return (
//       start +
//       a
//         .sort((c, d) => {
//           if (/[0-9]/.test(c)) {
//             return -1;
//           } else {
//             return c > d ? 1 : -1;
//           }
//         })
//         .join("")
//     );
//   });
//   let arrayObj = [];

//   array.forEach(item => {
//     let a = arrayObj.filter(subitem => {
//       return subitem.name === item.match(/[a-z]+/g)[0];
//     });
//     item.match(/([\-|\+])([0-9]*)/g);
//     let number = RegExp.$2 === "" ? 1 : Number(RegExp.$2);
//     let index = RegExp.$1 === "+" ? number : -number;
//     if (a.length === 0) {
//       arrayObj.push({
//         index,
//         name: item.match(/[a-z]+/g)[0]
//       });
//     } else {
//       arrayObj.forEach(subitem => {
//         if (subitem.name === item.match(/[a-z]+/g)[0]) {
//           subitem.index += index;
//         }
//       });
//     }
//   });
//   arrayObj = arrayObj
//     .sort((a, b) => {
//       if (a.name.length !== b.name.length) {
//         return a.name.length > b.name.length ? 1 : -1;
//       }
//       return a.name > b.name ? 1 : -1;
//     })
//     .filter(item => item.index !== 0)
//     .map(item => {
//       return item.index > 0
//         ? `+${Math.abs(item.index) === 1 ? "" : Math.abs(item.index)}${
//             item.name
//           }`
//         : `-${Math.abs(item.index) === 1 ? "" : Math.abs(item.index)}${
//             item.name
//           }`;
//     })
//     .join("");
//   if (arrayObj[0] === "+") {
//     return arrayObj.slice(1);
//   }
//   return arrayObj;
// }

// best practice
function simplify(poly) {
  var h = {};
  poly.match(/[+-]?[^+-]+/g).forEach(x => {
    var m = x.match(/[a-z]+/)[0],
      k = x.replace(m, "");
    m = m
      .split("")
      .sort()
      .join("");
    k = Number(/\d/.test(k) ? k : k + "1");
    h[m] = (h[m] || 0) + k;
  });
  return Object.keys(h)
    .filter(m => h[m])
    .sort((x, y) => x.length - y.length || (x < y ? -1 : 1))
    .map((m, i) => ({
      sign: h[m] < 0 ? "-" : i > 0 ? "+" : "",
      k: Math.abs(h[m]),
      m: m
    }))
    .map(o => o.sign + (o.k == 1 ? "" : o.k) + o.m)
    .join("");
}

console.log(simplify("+2b-13abx+8b-3b+4abx+10bxa+14bx"));
