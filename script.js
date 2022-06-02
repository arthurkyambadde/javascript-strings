'use strict';

const airline = 'TAP Air Uganda';
const plane = 'A320';

//STRING METHODS

console.log(airline.indexOf('g'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(8, 15));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  //B and E are the middle sit
  //-1 in slice method chooses the last character from a string
  const yourSeat = seat.slice(-1);
  if (yourSeat === 'B' || yourSeat === 'E') {
    console.log('you have got a middle seat 😡😒');
  } else {
    console.log('great you just got a luck seat 🥰😍');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//JAVASCRIPT AUTOMATICALLY DOES BOXING WHICH IS CONVERTING A STRING TO AN OBJECT
//WHAT JAVASCRIPT DOES DURING BOXING
console.log(new String('arthur'));
console.log(typeof new String('arthur'));

//THE SLICE METHOD CONVERTS THE OBJECT BACK TO STRINGS
console.log(typeof new String('arthur').slice(1));

//string method: changing to lowercase or to uppercase

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

console.log('arthur'.toUpperCase());

//fixing capitalisation in a name or word
const passengerName = 'aRtHuR'; // should be Arthur
const passengerLowerCase = passengerName.toLowerCase();
const passengerCorrectName =
  passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1);
console.log(passengerCorrectName);

//REPLACING PARTS OF A STRING

const priceGB = '288,97£';
console.log(priceGB);

const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));
// or regular expression
console.log(announcement.replaceAll(/door/g, 'gate'));

//methods that return booleans

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knnife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on this plane 🤬😡');
  } else {
    console.log('welcome aboard😎😊');
  }
};

checkBaggage(' i have a guN and a kNife');
checkBaggage(' i have a pussy cat');
checkBaggage('i have a GUN ');

// SPLITIING STRINGS

console.log('Arthur Kyambadde');
const [firstName, lastName] = 'Arthur Kyambade'.split(' ');

console.log(firstName);
console.log(lastName);

// JOINING STRINGS

const sentence = [
  'Mr',
  firstName,
  lastName.toUpperCase(),
  'is',
  'learning',
  'js',
].join(' ');
console.log(sentence);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('ssejemba daniel');
capitalizeName('kyambadde arthur');
capitalizeName('ssembatya dennis');
capitalizeName('ssonko jimmy');

// PADDING

const maskCreditCard = function (number) {
  const numberString = String(number);
  const last = numberString.slice(-4);
  return last.padStart(numberString.length, '*');
};

console.log(maskCreditCard(9848508760347630));
console.log(maskCreditCard(8768753867080088));
console.log(maskCreditCard('984989849843694'));

//REPEATING
const message2 = 'Bad weather .... All departures Delayed .......';
console.log(message2.repeat(5));

const planesInLine = function (numberOfPlanes) {
  console.log(
    `There are ${numberOfPlanes} planes in Line ${'✈'.repeat(numberOfPlanes)}`
  );
};

planesInLine(5);
planesInLine(15);
planesInLine(66);
planesInLine(7);
planesInLine(1);

//TEST DATA
// underscore_Case
// first_name
// Some_Variable
// ..calculate_AGE
// delayed_departure

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(i + 1)}`);
  }
});
