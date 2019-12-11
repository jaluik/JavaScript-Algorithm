// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// my answer
function validParentheses(parens) {
  for (i = 0; i < parens.length; i++) {
    let substrArray = parens.substr(0, i + 1).split("");
    let leftParen = substrArray.filter(item => item === "(");
    let rightParen = substrArray.filter(item => item === ")");
    if (i !== parens.length - 1) {
      if (leftParen.length < rightParen.length) {
        return false;
      }
    } else {
      if (leftParen.length !== rightParen.length) {
        return false;
      }
    }
  }
  return true;
}
