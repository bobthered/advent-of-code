export const partOne = (input = '') => {
  // parse input
  const lines = input.split('\n\n');

  // get seeds and maps
  let [seeds, ...maps] = lines;

  // parse seeds
  seeds = seeds.replace(/seeds:\s/g, '').split(' ').map(s => +s);

  // parse maps
  maps = maps.reduce((obj, map) => {
    // parse map
    const [description, values] = map.split(/\smap:\n/g)

    // parse description
    const [from, to] = description.split('-to-')

    // get ranges
    const ranges = values.split('\n').map(range => {
      // parse range
      const [destination, min, delta] = range.split(' ').map(s => +s);

      // calculate max
      const max = min + delta;

      return {
        min,
        max,
        destination,
        delta
      }
    });

    // update obj
    obj[from] = {
      to,
      ranges
    }

    return obj;
  }, {});

  // initiate starting key
  let key = 'seed';

  // initialize values
  let values = [...seeds]

  // loop until key is "location"
  while (key !== "location") {
    // loop over each values
    values = values.map(value => {
      // loop over ranges
      for (let rangeIndex = 0; rangeIndex < maps[key].ranges.length; rangeIndex++) {
        // destructure range
        const { min, max, destination } = maps[key].ranges[rangeIndex];

        // check if value is between min and max
        if (value >= min && value <= max) {
          return value = value - min + destination;
        }
      }
      return value
    })

    // update key
    key = maps[key].to;
  }

  // get lowest value
  const lowestValue = Math.min(...values);

  return lowestValue;
}