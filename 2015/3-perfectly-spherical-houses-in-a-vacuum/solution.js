// initiate direction dictionary
const directionDictionary = {
  '>': {
    x: 1,
    y: 0
  },
  '<': {
    x: -1,
    y: 0
  },
  'v': {
    x: 0,
    y: 1
  },
  '^': {
    x: 0,
    y: -1
  },
}

export const partOne = (input = '', people = 1) => {
  // initiate starting position
  const position = [...Array(people)].map(_ => { return { x: 0, y: 0 } })

  // initiate visited dictionary
  const visited = {
    '0-0': 1
  }

  // get directions
  const directions = input.split('');

  // loop over directions
  directions.map((direction, index) => {
    // get position index
    const positionIndex = index % people;

    // move position
    position[positionIndex].x += directionDictionary[direction].x;
    position[positionIndex].y += directionDictionary[direction].y;

    // update visited
    visited[`${position[positionIndex].x}-${position[positionIndex].y}`] = visited?.[`${position[positionIndex].x}-${position[positionIndex].y}`] + 1 || 1
  })

  // get total visited houses
  const totalVisitedHouses = Object.keys(visited).length;

  return totalVisitedHouses;
}

export const partTwo = (input = '') => {
  return partOne(input, 2)
}