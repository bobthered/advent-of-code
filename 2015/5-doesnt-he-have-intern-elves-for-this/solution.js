export const partOne = (input = '') => {
  // parse input
  const strings = input.split('\n');

  // get all nice strings
  const niceStrings = strings.filter(string => {
    // check if has at least 3 vowels
    const hasThreeVowels = /[aeiou].*[aeiou].*[aeiou]/g.test(string)

    // check if has a repeating character
    const hasRepeatingCharacter = /(.)\1{1,}/g.test(string);

    // check if has ab, cd, pq, or xy
    const hasBannedCharacters = /(ab|cd|pq|xy)/g.test(string);

    return (hasThreeVowels && hasRepeatingCharacter && !hasBannedCharacters)
  })

  return niceStrings.length;
}