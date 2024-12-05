const getDistances = (input) =>
  input.split("\r\n").reduce((cities, string) => {
    const {
      1: cityKey1,
      2: cityKey2,
      3: distance,
    } = string.match(/(\D+)\sto\s(\D+)\s=\s(\d+)/);
    if (!cities.has(cityKey1)) cities.set(cityKey1, new Map());
    if (!cities.has(cityKey2)) cities.set(cityKey2, new Map());
    const city1 = cities.get(cityKey1);
    const city2 = cities.get(cityKey2);
    city1.set(cityKey2, +distance);
    city2.set(cityKey1, +distance);
    cities.set(cityKey1, city1);
    cities.set(cityKey2, city2);
    return cities;
  }, new Map());

const getLongestDistance = (
  visitedCityKeys,
  unvisitedCityKeys,
  fromKey,
  distances,
  currentDistanceTraveled
) => {
  let longestDistance = 0;
  const from = distances.get(fromKey);
  for (let toIndex = 0; toIndex < unvisitedCityKeys.length; toIndex++) {
    const toKey = unvisitedCityKeys[toIndex];
    const distance = from.get(toKey);
    const newUnvisitedCityKeys = [...unvisitedCityKeys].filter(
      (cityKey) => cityKey !== toKey
    );
    if (newUnvisitedCityKeys.length === 0)
      longestDistance = Math.max(
        longestDistance,
        currentDistanceTraveled + distance
      );
    if (newUnvisitedCityKeys.length > 0)
      longestDistance = Math.max(
        longestDistance,
        getLongestDistance(
          [...visitedCityKeys, toKey],
          newUnvisitedCityKeys,
          toKey,
          distances,
          currentDistanceTraveled + distance
        )
      );
  }
  return longestDistance;
};

const getShortestDistance = (
  visitedCityKeys,
  unvisitedCityKeys,
  fromKey,
  distances,
  currentDistanceTraveled
) => {
  let shortestDistance = Infinity;
  const from = distances.get(fromKey);
  for (let toIndex = 0; toIndex < unvisitedCityKeys.length; toIndex++) {
    const toKey = unvisitedCityKeys[toIndex];
    const distance = from.get(toKey);
    const newUnvisitedCityKeys = [...unvisitedCityKeys].filter(
      (cityKey) => cityKey !== toKey
    );
    if (newUnvisitedCityKeys.length === 0)
      shortestDistance = Math.min(
        shortestDistance,
        currentDistanceTraveled + distance
      );
    if (newUnvisitedCityKeys.length > 0)
      shortestDistance = Math.min(
        shortestDistance,
        getShortestDistance(
          [...visitedCityKeys, toKey],
          newUnvisitedCityKeys,
          toKey,
          distances,
          currentDistanceTraveled + distance
        )
      );
  }
  return shortestDistance;
};

const longestTotalDistance = (cityKeys, distances) => {
  let longestDistance = 0;
  for (let fromIndex = 0; fromIndex < cityKeys.length; fromIndex++) {
    const fromKey = cityKeys[fromIndex];
    const from = distances.get(fromKey);
    const otherCityKeys = [...cityKeys].filter((toKey) => fromKey !== toKey);
    for (let toIndex = 0; toIndex < otherCityKeys.length; toIndex++) {
      const toKey = otherCityKeys[toIndex];
      const distance = from.get(toKey);
      const visitedCityKeys = [fromKey, toKey];
      const unvisitedCityKeys = [...cityKeys].filter(
        (cityKey) => !visitedCityKeys.includes(cityKey)
      );
      const longestTotalDistance = getLongestDistance(
        visitedCityKeys,
        unvisitedCityKeys,
        toKey,
        distances,
        distance
      );
      longestDistance = Math.max(longestDistance, longestTotalDistance);
    }
  }
  return longestDistance;
};

export const partOne = (input = "") => {
  const distances = getDistances(input);
  const cities = [...distances].map(([city]) => city);

  return shortestTotalDistance(cities, distances);
};

export const partTwo = (input = "") => {
  const distances = getDistances(input);
  const cities = [...distances].map(([city]) => city);

  return longestTotalDistance(cities, distances);
};

const shortestTotalDistance = (cityKeys, distances) => {
  let shortestDistance = Infinity;
  for (let fromIndex = 0; fromIndex < cityKeys.length; fromIndex++) {
    const fromKey = cityKeys[fromIndex];
    const from = distances.get(fromKey);
    const otherCityKeys = [...cityKeys].filter((toKey) => fromKey !== toKey);
    for (let toIndex = 0; toIndex < otherCityKeys.length; toIndex++) {
      const toKey = otherCityKeys[toIndex];
      const distance = from.get(toKey);
      const visitedCityKeys = [fromKey, toKey];
      const unvisitedCityKeys = [...cityKeys].filter(
        (cityKey) => !visitedCityKeys.includes(cityKey)
      );
      const shortestTotalDistance = getShortestDistance(
        visitedCityKeys,
        unvisitedCityKeys,
        toKey,
        distances,
        distance
      );
      shortestDistance = Math.min(shortestDistance, shortestTotalDistance);
    }
  }
  return shortestDistance;
};
