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

export const partTwo = (input = '') => {
  // parse input
  const strings = input.split('\n');

  // get all nice strings
  const niceStrings = strings.filter(string => {
    // It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
    const hasPairOfRepeatingTwoLetters = /(.{2,2}).*\1/g.test(string);

    // It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
    const hasOneRepeatingLetterWithExactlyOneLetterBetween = /(.{1,1}).{1,1}\1/g.test(string);

    return (hasPairOfRepeatingTwoLetters && hasOneRepeatingLetterWithExactlyOneLetterBetween)
  })

  return niceStrings.length;
}