// Link: https://www.codewars.com/kata/5613d06cee1e7da6d5000055

// My Solution

function step(stepGoal, startNumber, endNumber) {
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

  const primeNumbers = [];
  const isNotPrimeNumber = number => !isPrime(number)
  

  for (let index = startNumber; index <= endNumber; index++) {
    
    if(isNotPrimeNumber(index)) continue;

    const arrayIsEmpty = primeNumbers.length < 1

    if(arrayIsEmpty) {
      primeNumbers.push(index);
      continue;
    }

    const firstPrimeNumber = primeNumbers.find(primeNumber => (index - primeNumber) === stepGoal)
    
    if(firstPrimeNumber) return [firstPrimeNumber, index];

    primeNumbers.push(index);

  }

  return null;

}


// Best Solution
function isPrime(n) {
  var r = Math.sqrt(n) | 0;
  for (var i = 2; i <= r && n % i; i++);
  return i > r;
}

function step(g, m, n) {
  for (var i = m; i <= n - g; i++) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    };
  }
  
  return null;
}


// Refactored Solution