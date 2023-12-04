export const partOne = (input = '') => {
  // parse input
  const instructions = input.split('\n');

  // initiate grid
  const grid = [...Array(1000)].map(_ => [...Array(1000)].map(_ => 0))

  // loop over instructions
  instructions.map(instruction => {
    // destructure instruction
    let [_, command, coords] = instruction.split(/(turn on |turn off |toggle )/g);

    // trim command
    command = command.trim();

    // destructure coords
    const [from, to] = coords.split(' through ').map(s => {
      const [x, y] = s.split(',').map(s => +s);
      return { x, y }
    });

    // loop over affected rows
    for (let rowIndex = from.y; rowIndex <= to.y; rowIndex++) {
      // loop over lights
      for (let columnIndex = from.x; columnIndex <= to.x; columnIndex++) {
        // update individual light
        grid[rowIndex][columnIndex] = command === 'turn on' ? 1 : command === 'turn off' ? 0 : (grid[rowIndex][columnIndex] + 1) % 2
      }
    }

  })

  // count all lights that are on
  const totalLightsOn = grid.flat().reduce((total, current) => total += current)

  return totalLightsOn;
}

export const partTwo = (input = '') => {
  // parse input
  const instructions = input.split('\n');

  // initiate grid
  const grid = [...Array(1000)].map(_ => [...Array(1000)].map(_ => 0))

  // loop over instructions
  instructions.map(instruction => {
    // destructure instruction
    let [_, command, coords] = instruction.split(/(turn on |turn off |toggle )/g);

    // trim command
    command = command.trim();

    // destructure coords
    const [from, to] = coords.split(' through ').map(s => {
      const [x, y] = s.split(',').map(s => +s);
      return { x, y }
    });

    // loop over affected rows
    for (let rowIndex = from.y; rowIndex <= to.y; rowIndex++) {
      // loop over lights
      for (let columnIndex = from.x; columnIndex <= to.x; columnIndex++) {
        // The phrase turn on actually means that you should increase the brightness of those lights by 1.
        if (command === 'turn on') grid[rowIndex][columnIndex] = grid[rowIndex][columnIndex] + 1;

        // The phrase turn off actually means that you should decrease the brightness of those lights by 1, to a minimum of zero.
        if (command === 'turn off') grid[rowIndex][columnIndex] = Math.max(0, grid[rowIndex][columnIndex] - 1)

        // The phrase toggle actually means that you should increase the brightness of those lights by 2.
        if (command === 'toggle') grid[rowIndex][columnIndex] = grid[rowIndex][columnIndex] + 2;
      }
    }

  })

  // count all lights that are on
  const totalLightsOn = grid.flat().reduce((total, current) => total += current)

  return totalLightsOn;
}