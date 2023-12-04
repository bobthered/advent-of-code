import md5 from 'md5';

export const partOne = (input = '') => {
  // initiate found to false
  let found = false;

  // initiate answer
  let answer = 0;

  // initiate a max number to 
  const max = 100000000

  while (!found) {
    // increment the answer
    answer++;

    // calcualte the hash
    const hash = md5(`${input}${answer}`);

    // break out if found correct hash
    if (answer >= max || hash.substring(0, 5) === '00000') found = true;
  }

  return answer;
}