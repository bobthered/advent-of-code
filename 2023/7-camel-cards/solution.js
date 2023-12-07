const cardValueDictionary = {
  false: {
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
  },
  true: {
    'J': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'T': 10,
    'Q': 11,
    'K': 12,
    'A': 13,
  },
}
const createHand = (line = '', jokersAreWild = false) => {
  // destructure line
  const [cardInfo, bidInfo] = line.split(' ');

  // get cards
  const cards = cardInfo.split('');

  // get card values
  const cardValues = cards.map(card => cardValueDictionary[jokersAreWild][card]);

  // get bid
  const bid = +bidInfo;

  // count card instances
  const cardCountsDictionary = [...cards]
    .filter(card => !jokersAreWild || card !== 'J')
    .reduce((obj, card) => {
      // check if card doesn't exist in obj
      if (obj?.[card] === undefined) obj[card] = 0;

      obj[card]++;
      return obj;
    }, {})
  let jokerCounts = [...cards]
    .filter(card => jokersAreWild && card === 'J')
    .length

  // get card counts sorted by highest
  const cardCounts = Object.values(cardCountsDictionary).sort((a, b) => a > b ? -1 : a < b ? 1 : 0);

  // initialize type
  let type = 'High card';

  // update type if fits criteria
  if (cardCounts[0] === 5) type = 'Five of a kind';
  if (cardCounts[0] === 4) type = 'Four of a kind'
  if (cardCounts[0] === 3 && cardCounts?.[1] === 2) type = 'Full house'
  if (cardCounts[0] === 3 && (cardCounts?.[1] === 1 || cardCounts?.[1] === undefined)) type = 'Three of a kind'
  if (cardCounts[0] === 2 && cardCounts?.[1] === 2) type = 'Two pair'
  if (cardCounts[0] === 2 && (cardCounts?.[1] === 1 || cardCounts?.[1] === undefined)) type = 'One pair'

  // update if jokers are wild
  if (jokersAreWild) {
    // loop over types
    for (let handTypeIndex = 0; handTypeIndex < Object.keys(handTypeRank).length; handTypeIndex++) {
      if (Object.keys(handTypeRank)[handTypeIndex] === 'Five of a kind') {
        if (
          (type === 'Five of a kind') ||
          (type === 'Four of a kind' && jokerCounts === 1) ||
          (type === 'Three of a kind' && jokerCounts === 2) ||
          (type === 'One pair' && jokerCounts === 3) ||
          jokerCounts > 3
        ) {
          type = 'Five of a kind'
          break;
        }
        if (
          (type === 'Four of a kind') ||
          (type === 'Three of a kind' && jokerCounts === 1) ||
          (type === 'One pair' && jokerCounts == 2) ||
          jokerCounts > 2
        ) {
          type = 'Four of a kind';
          break;
        }
        if (
          (type === 'Full house') ||
          (type === 'Two pair' && jokerCounts === 1) ||
          (type === 'One pair' && jokerCounts === 2)
        ) {
          type = 'Full house';
          break;
        }
        if (
          (type === 'Three of a kind') ||
          (type === 'One pair' && jokerCounts === 1) ||
          (type === 'High card' && jokerCounts === 2)
        ) {
          type = 'Three of a kind'
        }
        if (
          (type === 'Two pair') ||
          (type === 'One pair' && jokerCounts === 1)
        ) {
          type = 'Two pair'
        }
        if (
          (type === 'One pair') ||
          (type === 'High card' && jokerCounts === 1)
        ) {
          type = 'One pair'
        }
      }
    }
  }

  return {
    bid,
    cardValues,
    type
  }
}
const createHands = (input = '', jokersAreWild = false) => {
  // initiate hands array
  let hands = input
    .split('\n')
    .map(line => createHand(line, jokersAreWild));

  // methods
  const getTotalWinnings = () => {
    // rank hands
    rankHands();

    return hands.reduce((total, hand, rankIndex) => total += hand.bid * (rankIndex + 1), 0)
  }
  const rankHands = () => {
    hands = hands.sort((a, b) => {
      if (handTypeRank[a.type] > handTypeRank[b.type]) return -1;
      if (handTypeRank[a.type] < handTypeRank[b.type]) return 1;
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
const handTypeRank = {
  'Five of a kind': 1,
  'Four of a kind': 2,
  'Full house': 3,
  'Three of a kind': 4,
  'Two pair': 5,
  'One pair': 6,
  'High card': 7
}

export const partOne = (input = '') => {
  // get hands
  const hands = createHands(input);

  // get total winnings
  const totalWinnings = hands.getTotalWinnings();

  return totalWinnings;
}

export const partTwo = (input = '') => {
  // get hands
  const hands = createHands(input, true);

  // get total winnings
  const totalWinnings = hands.getTotalWinnings();

  return totalWinnings;
}