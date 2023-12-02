import { parseInput } from "./parseInput";
export const solution = (input = '') => {
  // parse input
  const lines = parseInput(input);

  // strip non numbers from lines
  const numbers = lines.map(line => line.replace(/\D/g, '').split('').map(string => +string));

  // get first and last digit from each line
  const firstAndLastDigits = numbers.map(array => { return +[array[0], array[array.length - 1]].join('') })

  // get sum of digits
  const sum = firstAndLastDigits.reduce((total, current) => total + current, 0)

  return sum;
}