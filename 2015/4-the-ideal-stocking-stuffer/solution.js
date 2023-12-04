import md5 from 'md5';

export const partOne = (input = '', answer = 0, leadingZeroCount = 5) => {
  // initiate found to false
  let found = false;

  // initiate try count
  let tries = 0;

  // initiate a max number to 
  const maxTries = 10000000

  while (!found) {
    // calcualte the hash
    const hash = md5(`${input}${answer}`);

    // break out if found correct hash
    if (hash.substring(0, leadingZeroCount) === '0'.repeat(leadingZeroCount)) {
      console.log(hash)
      found = true;
    }

    if (tries > maxTries) throw `Must increase answer larger than ${answer}`

    // increment the guess
    answer++;

    tries++;
  }
  answer--;

  return answer;
}

export const partTwo = (input = '', answer = 0) => {
  return partOne(input, answer, 6)
}