const createRace = (time, distance) => {
  // methods
  const getMinimumHoldTime = () => Math.floor(-1 * ((-1 * time + Math.sqrt(Math.pow(time, 2) - 4 * distance)) / 2)) + 1
  const getNumberOfWaysToBeatRecord = () => {
    const minimum = getMinimumHoldTime();
    return time - minimum * 2 + 1
  }
  return { getNumberOfWaysToBeatRecord }
}
const getNumberOfWaysToBeatRecord = (times, distances) => {
  // initialize races
  const races = times.map((time, timeIndex) => {
    const race = createRace(time, distances[timeIndex])
    return race;
  })

  // get product of number of ways to beat each race record
  const numberOfWaysToBeatEachRaceProduct = races.reduce((total, race) => total *= race.getNumberOfWaysToBeatRecord(), 1)

  return numberOfWaysToBeatEachRaceProduct;
}
export const partOne = (input = '') => {
  // parse input
  const [times, distances] = input
    .split('\n')
    .map((line) =>
      line
        .replace(/(Time:\s+|Distance:\s+)/g, '')
        .split(/\s+/)
        .map((string) => +string)
    );

  return getNumberOfWaysToBeatRecord(times, distances)
};

export const partTwo = (input = '') => {
  // parse input
  const [time, distance] = input
    .split('\n')
    .map(line =>
      +line
        .replace(/\D/g, '')
    )

  return getNumberOfWaysToBeatRecord([time], [distance])

}