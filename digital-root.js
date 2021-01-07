// Link: https://www.codewars.com/kata/541c8630095125aba6000c00

// My Solution
function digital_root(n) {
  let digits = [...String(n)];
  let sum = 0;
  
  function namedFunction() {
    if(digits.length) {
      sum += Number(digits.shift());
      namedFunction();
    }

    if(String(sum).length > 1) {
      digits = [...String(sum)];
      sum = 0;
      namedFunction();
    }
    
  }

  namedFunction();
  return sum;
}


// Best Solution
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}


// Refactored Solution
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    [...String(n)].reduce((acc, d) => (acc + +d), 0));
}