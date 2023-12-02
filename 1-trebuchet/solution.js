export const partOne = (input = '') => {
  // parse input
  const lines = input.split('\n')

  // strip non numbers from lines
  const numbers = lines.map(line => line.replace(/\D/g, '').split('').map(string => +string));

  // get first and last digit from each line
  const calibrationNumbers = numbers.map(array => { return +[array[0], array[array.length - 1]].join('') })

  // get sum of digits
  const sum = calibrationNumbers.reduce((total, current) => total + current, 0)

  return sum;
}

export const partTwo = (input = '') => {
  // parse input
  const lines = input.split('\n');

  // initiate spelled out numbers dictionary
  const dictionary = {
    'one': 'o1e',
    'two': 't2o',
    'three': 't3e',
    'four': 'f4r',
    'five': 'f5e',
    'six': 's6x',
    'seven': 's7n',
    'eight': 'e8t',
    'nine': 'n9e'
  }

  // replace all spelled out numbers
  const wordsConvertedToNumbers = lines.map(line => { Object.keys(dictionary).forEach(key => { line = line.replaceAll(key, dictionary[key]) }); return line })

  // strip non numbers from lines
  const numbers = wordsConvertedToNumbers.map(line => line.replace(/\D/g, '').split('').map(string => +string));

  // get first and last digit from each line
  const calibrationNumbers = numbers.map(array => { return +[array[0], array[array.length - 1]].join('') });

  // get sum of digits
  const sum = calibrationNumbers.reduce((total, current) => total + current, 0)

  return sum;
}