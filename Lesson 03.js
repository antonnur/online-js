const numbers = [1, 2, 9, 4, 5, 6, 7];

// -- itFind --
function itFind(array, callback) {
  let result = undefined;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result = array[i]
      break;
    }
  }
  return result;
}

// function checkDividedToThree(num) {
//   return num % 3 ? false : true;
// }
const checkDividedToThree = num => !(num % 3)
console.log('-- itFind --')
console.log(itFind(numbers, checkDividedToThree));

// itFilter
function itFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const checkDividedToTwo = num => !(num % 2)
console.log('-- itFilter --')
console.log(itFilter(numbers, checkDividedToTwo));

// -- itMap --
function itMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const mapedEl = callback(array[i]);
    result.push(mapedEl);
  }
  return result;
}

const getSquare = num => Math.sqrt(num);
console.log('-- itMap --')
console.log(itMap(numbers, getSquare));

// -- itSlice --
function itSlice(array, startIndex = 0, endIndex = array.length) {
  const result = [];
  const start = startIndex >= 0 ? startIndex : array.length + startIndex;
  const end = endIndex < 0 ? array.length + endIndex : endIndex;
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

console.log('-- itSlice --')
console.log(itSlice(numbers, 0, -1));
console.log(numbers.slice(-2, -4));

// ------------ Reduce ------------
const maxNumber = numbers.reduce((acc, el) => {
  return acc > el ? acc : el
}, 0)
console.log('-- Reduce maxNumber --')
console.log(maxNumber);

// -- Reduce Filter --
const reduceFilter = numbers.reduce((acc, el) => {
  if (!(el % 2)) {
    acc.push(el);
  }
  return acc;
}, [])

console.log('-- Reduce Filter --')
console.log(reduceFilter);

// -- Reduce GetSquare--
const reduceGetSquare = numbers.reduce((acc, el) => {
  const sqrt = Math.sqrt(el)
  acc.push(sqrt)
  return acc
}, [])

console.log('-- Reduce GetSquare --')
console.log(reduceGetSquare);

// -- Reduce randomNumbers--
const randomNumbers = [1, 2, 9, 4, 5, 6, 7, 8, 9, 10, 3, 2, 4, 5, 6, 9];
const iteration = randomNumbers.reduce((acc, el) => {
  acc[el] = acc[el] ? acc[el] + 1 : 1;
  return acc;
}, {}) // {} - переупаковываем в обект

console.log('-- Reduce Iteration --')
console.log(iteration);

// -- itReduce --
function itReduce(array, callback, startValue) {
  let acc = startValue
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc
}

console.log('-- itReduce Find--')
console.log(itReduce(numbers, (acc, el) => acc > el ? acc : el, 0))
console.log('-- itReduce Filter--')
console.log(itReduce(numbers, (acc, el) => {
  if (!(el % 2)) {
    acc.push(el)
  }
  return acc
}, []))
console.log('-- itReduce Sum--')
console.log(itReduce(numbers, (acc, el) => {
  acc = acc + el
  return acc
}, 0))
