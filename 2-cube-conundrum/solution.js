export const partOne = (input = '') => {
  // initiate max cubes
  const maxCubes = {
    red: 12,
    green: 13,
    blue: 14,
  }
  // get game possibilities
  const gamePossibilities = input.split('\n').map(line => {
    // get gameId and gameInformation
    const [id, gameInformation] = line.replace(/Game\s/g, '').split(': ');

    // get gameSets
    const gameSets = gameInformation.split('; ');

    // set the possibility to true
    let possible = true;

    // walk though gameSets to see if it is possible or not
    for (let gameSetId = 0; gameSetId < gameSets.length; gameSetId++) {
      // get cubes pulled in each set
      const setCubes = gameSets[gameSetId].split(', ').reduce((obj, cubeInfo) => {
        // get the count and color of the cube
        const [count, color] = cubeInfo.split(' ');

        // update cube color count
        obj[color] += +count;
        return obj;
      }, { red: 0, green: 0, blue: 0 })

      if (setCubes.red > maxCubes.red || setCubes.green > maxCubes.green || setCubes.blue > maxCubes.blue) {
        possible = false;
        break;
      }
    }

    return { id, possible }
  });

  // get possible game ids
  const possibleGameIds = gamePossibilities.filter(game => game.possible).map(game => +game.id);

  // get sum of possible game ids
  const possibleGameIdsSum = possibleGameIds.reduce((total, id) => total + id, 0)

  return possibleGameIdsSum;
}

export const partTwo = (input = '') => {
  // get game powers
  const gamePowers = input.split('\n').map(line => {
    // get gameId and gameInformation
    const [id, gameInformation] = line.replace(/Game\s/g, '').split(': ');

    // get gameSets
    const gameSets = gameInformation.split('; ');

    // initiate max cubes found
    const maxCubes = {
      red: 0,
      green: 0,
      blue: 0
    }

    // walk though gameSets
    for (let gameSetId = 0; gameSetId < gameSets.length; gameSetId++) {
      // get cubes pulled in each set
      gameSets[gameSetId].split(', ').map((cubeInfo) => {
        // get the count and color of the cube
        const [count, color] = cubeInfo.split(' ');

        // check if cubes color count is larger than current max Cubes
        if (+count > maxCubes[color]) maxCubes[color] = +count
      })
    }

    return Object.keys(maxCubes).reduce((total, key) => total *= maxCubes[key], 1)
  });

  // get game power total

  const gamePowerTotal = gamePowers.reduce((total, current) => total + current, 0)

  return gamePowerTotal
}

