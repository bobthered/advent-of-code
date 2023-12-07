const cardValueDictionary = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}
const createHand = (line = '') => {
  // destructure line
  const [cardInfo, bidInfo] = line.split(' ');

  // get cards
  const cards = cardInfo.split('');

  // get card values
  const cardValues = cards.map(card => cardValueDictionary[card]);

  // get bid
  const bid = +bidInfo;

  // count card instances
  const cardCountsDictionary = [...cards].reduce((obj, card) => {
    // check if card doesn't exist in obj
    if (obj?.[card] === undefined) obj[card] = 0;

    obj[card]++;
    return obj;
  }, {})

  // get card counts sorted by highest
  const cardCounts = Object.values(cardCountsDictionary).sort((a, b) => a > b ? -1 : a < b ? 1 : 0);

  // methods
  const isFiveOfAKind = () => cardCounts[0] === 5;
  const isFourOfAKind = () => cardCounts[0] === 4;
  const isFullHouse = () => cardCounts[0] === 3 && cardCounts?.[1] === 2;
  const isThreeOfAKind = () => cardCounts[0] === 3 && cardCounts?.[1] === 1;
  const isTwoPair = () => cardCounts[0] === 2 && cardCounts?.[1] === 2;
  const isOnePair = () => cardCounts[0] === 2 && cardCounts?.[1] === 1;
  const rank = () => {
    if (isFiveOfAKind()) return 1;
    if (isFourOfAKind()) return 2;
    if (isFullHouse()) return 3;
    if (isThreeOfAKind()) return 4;
    if (isTwoPair()) return 5;
    if (isOnePair()) return 6;
    return 7;
  }

  return {
    bid,
    cardValues,
    isFiveOfAKind,
    isFourOfAKind,
    isFullHouse,
    isThreeOfAKind,
    isTwoPair,
    isOnePair,
    rank,
  }
}
const createHands = (input = '') => {
  // initiate hands array
  let hands = input
    .split('\n')
    .map(line => createHand(line));

  // methods
  const getTotalWinnings = () => {
    // rank hands
    rankHands();

    return hands.reduce((total, hand, rankIndex) => total += hand.bid * (rankIndex + 1), 0)
  }
  const rankHands = () => {
    hands = hands.sort((a, b) => {
      if (a.rank() > b.rank()) return -1;
      if (a.rank() < b.rank()) return 1;
      for (let cardIndex = 0; cardIndex < a.cardValues.length; cardIndex++) {
        if (a.cardValues[cardIndex] < b.cardValues[cardIndex]) return -1;
        if (a.cardValues[cardIndex] > b.cardValues[cardIndex]) return 1;
      }
      return 0;
    })
  }

  return {
    getTotalWinnings
  }
}

export const partOne = (input = '') => {
  // get hands
  const hands = createHands(input);

  // get total winnings
  const totalWinnings = hands.getTotalWinnings();

  return totalWinnings;
}