type Circuit = Set<Junction>;

type Junction = {
  circuit: Circuit | null;
  x: number;
  y: number;
  z: number;
};

export const partOne = (input = "", numberOfConnections = 10) => {
  const circuits = new Set<Circuit>();
  const distances = new Map<number, Set<Junction>>();

  const junctions: Junction[] = input.split("\n").map((line) => {
    const [x, y, z] = line.split(",").map((string) => Number(string));
    return { circuit: null, x, y, z };
  });

  for (
    let junctionAIndex = 0;
    junctionAIndex < junctions.length - 1;
    junctionAIndex++
  ) {
    const junctionA = junctions[junctionAIndex];

    for (
      let junctionBIndex = junctionAIndex + 1;
      junctionBIndex < junctions.length;
      junctionBIndex++
    ) {
      const junctionB = junctions[junctionBIndex];
      const distance = Math.sqrt(
        Math.pow(junctionA.x - junctionB.x, 2) +
          Math.pow(junctionA.y - junctionB.y, 2) +
          Math.pow(junctionA.z - junctionB.z, 2)
      );

      distances.set(distance, new Set([junctionA, junctionB]));
    }
  }

  const distancesSorted = [...distances.keys()].sort((a, b) => a - b);

  for (
    let connectionIndex = 0;
    connectionIndex < numberOfConnections;
    connectionIndex++
  ) {
    if (connectionIndex >= distancesSorted.length) break;

    const [junctionA, junctionB] =
      distances.get(distancesSorted[connectionIndex]) ?? [];

    const circuitA: Circuit = junctionA.circuit ?? new Set<Junction>();
    const circuitB: Circuit = junctionB.circuit ?? new Set<Junction>();

    if (!circuitA.has(junctionB) || !circuitB.has(junctionA)) {
      const newCircuit = new Set([...circuitA, ...circuitB]);
      newCircuit.add(junctionA);
      newCircuit.add(junctionB);

      newCircuit.forEach((junction) => (junction.circuit = newCircuit));

      circuits.delete(circuitA);
      circuits.delete(circuitB);
      circuits.add(newCircuit);
    }
  }

  const circuitsSorted = [...circuits].sort((a, b) => b.size - a.size);

  let circuitSize = 1;

  for (
    let circuitIndex = 0;
    circuitIndex < Math.min(3, circuitsSorted.length);
    circuitIndex++
  ) {
    circuitSize *= circuitsSorted[circuitIndex].size;
  }

  return circuitSize;
};

export const partTwo = (input = "") => {
  // const circuits = new Set<Circuit>();
  const distances = new Map<number, Set<Junction>>();

  const junctions: Junction[] = input.split("\n").map((line) => {
    const [x, y, z] = line.split(",").map((string) => Number(string));
    return { circuit: null, x, y, z };
  });

  for (
    let junctionAIndex = 0;
    junctionAIndex < junctions.length - 1;
    junctionAIndex++
  ) {
    const junctionA = junctions[junctionAIndex];

    for (
      let junctionBIndex = junctionAIndex + 1;
      junctionBIndex < junctions.length;
      junctionBIndex++
    ) {
      const junctionB = junctions[junctionBIndex];
      const distance = Math.sqrt(
        Math.pow(junctionA.x - junctionB.x, 2) +
          Math.pow(junctionA.y - junctionB.y, 2) +
          Math.pow(junctionA.z - junctionB.z, 2)
      );

      distances.set(distance, new Set([junctionA, junctionB]));
    }
  }

  const distancesSorted = [...distances.keys()].sort((a, b) => a - b);
  let connectionIndex = 0;

  while (true) {
    if (connectionIndex >= distancesSorted.length) break;

    const [junctionA, junctionB] =
      distances.get(distancesSorted[connectionIndex]) ?? [];

    const circuitA: Circuit = junctionA.circuit ?? new Set<Junction>();
    const circuitB: Circuit = junctionB.circuit ?? new Set<Junction>();

    if (!circuitA.has(junctionB) || !circuitB.has(junctionA)) {
      const newCircuit = new Set([...circuitA, ...circuitB]);
      newCircuit.add(junctionA);
      newCircuit.add(junctionB);
      newCircuit.forEach((junction) => (junction.circuit = newCircuit));

      if (newCircuit.size === junctions.length) {
        return junctionA.x * junctionB.x;
      }
    }

    connectionIndex++;
  }
};
