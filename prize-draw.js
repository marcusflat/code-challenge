// Link: https://www.codewars.com/kata/5616868c81a0f281e500005c

// My Solution
function calculateStringLength(arrayOfLetters) {
  const startNumber = 97;
  return arrayOfLetters.reduce((acc, cur) =>(
    acc += (cur.charCodeAt(0) - startNumber) + 1
  ), arrayOfLetters.length)
}

function rank(st, we, n) {
  if(st === '') return "No participants";

  const participants = st.split(',');

  if(n > participants.length) return "Not enough participants";

  const ranking = participants.reduce((acc, cur, index) => {
    const winningNumber = calculateStringLength([...cur.toLowerCase()]) * we[index];
    return acc = {...acc, [cur]: winningNumber}
  }, {});

  const orderedRanking = Object.entries(ranking).sort((a,b) => b[1] - a[1]  || a[0].localeCompare(b[0]));

  const [ winner ] = orderedRanking[n - 1];
  return winner;
}

// Best Solution
function rank(st, we, n) {
  let names = st.split(',')
  if (!st.length) return 'No participants'
  if (names.length < n) return 'Not enough participants'
  return names.map((_, i) => ({
      name: _,
      s: [..._.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
    }))
    .sort((a, b) => a.name > b.name)
    .sort((a, b) => b.s - a.s)
    [n - 1].name
}

// Refactored Solution
function rank(st, we, n) {
  const participants = st.split(',');
  if(st === '') return "No participants";
  if(n > participants.length) return "Not enough participants";

  return participants.map((name, index) => ({
    name,
    winningNumber: [...name.toLowerCase()].reduce((acc, l) => acc + l.charCodeAt() - 96, 0) * we[index]
  }))
  .sort((a,b) => b.winningNumber - a.winningNumber || a.name.localeCompare(b.name))
  [n - 1].name;
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));