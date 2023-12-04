export const partOne = (input = '') => {
  // parse input
  const cardInputs = input.split('\n');

  // get points of each card
  const cardPoints = cardInputs.map((card) => {
    // destructure data
    const [winningNumbers, myNumbers] = card.replace(/Card\s+\d:\s/g, '').split(' | ').map(string => string.split(/\s+/g))

    // initiate points
    let points = 0;

    // loop over my numbers
    myNumbers.map(myNumber => {
      // check if myNumber is in winning numbers
      if (winningNumbers.includes(myNumber)) points = points === 0 ? 1 : points * 2;
    })

    return points;
  })


  // get sum of card points
  const cardPointsSum = cardPoints.reduce((total, current) => total += current, 0)

  return cardPointsSum;
}