
const readline = require('readline');


console.log('Part 1: Sorting Arrays');
console.log('------------------------------');

const statesAndCapitals = [
  ['Alabama', 'Montgomery'],
  ['Alaska', 'Juneau'],
  ['Arizona', 'Phoenix'],
  [ 'Arkansas', 'Little Rock'],
  ['California', 'Sacramento'],
  ['Colorado', 'Denver'],
  ['Connecticut', 'Hartfor'],
  ['Delaware', 'Dover'],
  ['Florida', 'Tallahassee'],
  ['Georgia', 'Atlanta'],
  ['Hawaii', 'Honolulu'],
  ['Idaho', 'Boise'],
  ['Illinois', 'Springfield'],
  ['Indiana', 'Indianapolis'],
  ['Iowa', 'Des Moines'],
  ['Kansas', 'Topeka'],
  ['Kentucky', 'Frankford'],
  ['Louisiana', 'Baton Rouge'],
  ['Maine', 'Augusta'],
  ['Maryland', 'Annapolis'],
  ['Massachusetts', 'Boston'],
  ['Michigan', 'Lansing'],
  ['Minnesota', 'Saint Paul'],
  ['Mississippi', 'Jackson'],
  ['Missouri', 'Jefferson City'],
  ['Montana', 'Helena'],
  ['Nebraska', 'Lincoln'],
  ['Nevada', 'Carson City'],
  ['New Hampshire', 'Concord'],
  ['New Jersey', 'Trenton'],
  ['New Mexico', 'Santa Fe'],
  ['New York', 'Albany'],
  ['North Carolina', 'Raleigh'],
  ['North Dakota', 'Bismark'],
  ['Ohio', 'Columbus'],
  ['Oklahoma', 'Oklahoma City'],
  ['Oregon', 'Salem'],
  ['Pennsylvania', 'Harrisburg'],
  ['Rhode Island', 'Providence'],
  ['South Carolina', 'Columbia'],
  ['South Dakota', 'Pierre'],
  ['Tennessee', 'Nashville'],
  ['Texas', 'Austin'],
  ['Utah', 'Salt Lake City'],
  ['Vermont', 'Montpelier'],
  ['Virginia', 'Richmond'],
  ['Washington', 'Olympia'],
  ['West Virginia', 'Charleston'],
  ['Wisconsin', 'Madison'],
  ['Wyoming', 'Cheyenne'],
];

console.log('Current contents of the array:');
statesAndCapitals.forEach(([state, capital]) => {
  console.log(`${state}: ${capital}`);
});
console.log('\n');

function bubbleSort(array) {
  const length = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < length - 1; i++) {
      if (array[i][1].localeCompare(array[i + 1][1]) > 0) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(statesAndCapitals);
console.log('Array after sorting by capital:');
statesAndCapitals.forEach(([state, capital]) => {
  console.log(`${state}: ${capital}`);
});
console.log('\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let correctCount = 0;

function promptQuestion(index) {
  if (index >= statesAndCapitals.length) {
    console.log(`Total correct count: ${correctCount}`);
    rl.close();
    return;
  }

  const [state, capital] = statesAndCapitals[index];

  rl.question(`What is the capital of ${state}? `, (answer) => {
    if (answer.toLowerCase() === capital.toLowerCase()) {
      correctCount++;
    }
    promptQuestion(index + 1);
  });
}

promptQuestion(0);


console.log('\nPart 2: Sorting & Searching HashMap');
console.log('------------------------------');

const stateCapitalMap = new Map();

statesAndCapitals.forEach(([state, capital]) => {
  stateCapitalMap.set(state, capital);
});

console.log('Content of the Map:');
stateCapitalMap.forEach((capital, state) => {
  console.log(`${state}: ${capital}`);
});
console.log('\n');

const sortedMap = new Map([...stateCapitalMap.entries()].sort());

rl.question('Enter a state: ', (state) => {
  const capital = sortedMap.get(state);
  if (capital) {
    console.log(`Capital of ${state}: ${capital}`);
  } else {
    console.log(`Capital for ${state} not found.`);
  }
  rl.close();
});



