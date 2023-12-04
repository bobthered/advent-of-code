export const partOne = (input = '') => {
  // parse input
  const lines = input.split('\n');

  // initialize part numbers
  let partNumbers = [];

  // loop through lines
  lines.map((line, rowIndex) => {
    // find all matches
    const matches = [...line.matchAll(/\d+/g)];

    // loop over possible matches
    matches.map(match => {
      // destructure match data
      const [number] = match;
      const { index } = match;

      // initialize index ranges
      const indexStartRow = rowIndex - 1;
      const indexEndRow = rowIndex + 1;
      const indexStartColumn = index - 1;
      const indexEndColumn = index + number.length + 1;

      // get all text to check
      const text = [
        lines[indexStartRow]?.substring(indexStartColumn, indexEndColumn) || '',
        lines[rowIndex]?.substring(indexStartColumn, indexEndColumn) || '',
        lines[indexEndRow]?.substring(indexStartColumn, indexEndColumn) || '',
      ].join('');


      // test if it has a non-number and period
      const validPart = /([^\d|\.])/g.test(text);

      // add to part numbers if it is a valid Part
      if (validPart) partNumbers.push(number)
    })
  })

  // get sum of part numbers
  const partNumbersSum = partNumbers.reduce((total, current) => total += +current, 0)

  return partNumbersSum;
}

export const partTwo = (input = '') => {
  // parse input
  const lines = input.split('\n');

  // initialize gear ratios
  let gearRatios = [];

  // loop through lines
  lines.map((line, rowIndex) => {
    // find all gears
    const gears = [...line.matchAll(/\*/g)];

    // loop over possible gears
    gears.map(gear => {
      // destructure gear data
      const { index: gearIndex } = gear;

      // look for adjacent numbers
      const adjacentNumbers = [...Array(3)].reduce((adjacentNumbers, _, rowIndexDelta) => {
        // get current rowIndex
        const currentRowIndex = rowIndex + rowIndexDelta - 1;

        // find all numbers around gear
        const matches = [...lines[currentRowIndex]?.matchAll(/\d+/g)];

        // loop over numbers
        matches.map(match => {
          // destructure match data
          const [number] = match;
          const { index: numberIndex } = match;

          // find bounds
          const isGreaterThan = gearIndex >= numberIndex - 1;
          const isLessThan = gearIndex < numberIndex + number.length + 1

          // check if is adjacent to gearIndex
          if (isGreaterThan && isLessThan) {
            adjacentNumbers = [...adjacentNumbers, number]
          }
        })


        return adjacentNumbers
      }, [])

      // check if exactly two numbers are adjacent
      if (adjacentNumbers.length === 2) gearRatios.push(adjacentNumbers.reduce((total, number) => total *= +number))

    })

  })

  // get sum of gear ratios
  const gearRatiosSum = gearRatios.reduce((total, current) => total += +current, 0)

  return gearRatiosSum
}