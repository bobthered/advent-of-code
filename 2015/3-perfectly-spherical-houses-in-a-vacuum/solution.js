export const partOne = (input = '') => {
  // initiate starting position
  const position = { x: 0, y: 0 }

  // initiate visited dictionary
  const visited = {
    '0-0': 1
  }

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

  // get directions
  const directions = input.split('');

  // loop over directions
  directions.map(direction => {
    // move position
    position.x += directionDictionary[direction].x;
    position.y += directionDictionary[direction].y;

    // update visited
    visited[`${position.x}-${position.y}`] = visited?.[`${position.x}-${position.y}`] + 1 || 1
  })

  // get total visited houses
  const totalVisitedHouses = Object.keys(visited).length;

  return totalVisitedHouses;
}