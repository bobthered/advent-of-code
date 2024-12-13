type Button = { cost: number; x: number; y: number };
type Machine = {
  button: { a: Button; b: Button };
  prize: Prize;
  winningCombinations: WinningCombination;
};
type Prize = { x: number; y: number };
type WinningCombination = Map<string, WinningCombinationValue>;
type WinningCombinationValue = {
  count: { a: number; b: number };
  cost: number;
};

const filterMachines = ({ winningCombinations }: Machine): boolean =>
  winningCombinations.size > 0;
const getWinningCombinations = (
  a: Button,
  b: Button,
  key: "x" | "y",
  prize: Prize
) =>
  [...Array(Math.ceil(prize[key] / a[key]))]
    .map((_, i) => {
      const aPresses = i;
      const aDistance = a[key] * i;
      const distanceRemaining = prize[key] - aDistance;
      const bPresses = distanceRemaining / b[key];
      return { aPresses, bPresses };
    })
    .reduce((map: WinningCombination, { aPresses, bPresses }) => {
      if (bPresses % 1 === 0)
        map.set(`${aPresses}|${bPresses}`, {
          count: { a: aPresses, b: bPresses },
          cost: aPresses * a.cost + bPresses * b.cost,
        });
      return map;
    }, new Map<string, { count: { a: number; b: number }; cost: number }>());
const initButton = (cost: number, x: number, y: number): Button => ({
  cost,
  x,
  y,
});
const initMachines = (input = "") =>
  input.split("\r\n\r\n").map((string) => {
    const [_, buttonAX, buttonAY, buttonBX, buttonBY, prizeX, prizeY] = (
      string.match(
        /Button\sA:\sX\+(\d+),\sY\+(\d+)\r\nButton\sB:\sX\+(\d+),\sY\+(\d+)\r\nPrize:\sX=(\d+),\sY=(\d+)/
      ) || []
    ).map(Number);

    const a = initButton(3, buttonAX, buttonAY);
    const b = initButton(1, buttonBX, buttonBY);
    const prize = initPrize(prizeX, prizeY);
    const winningXCombinations = getWinningCombinations(a, b, "x", prize);
    const winningYCombinations = getWinningCombinations(a, b, "y", prize);
    const winningCombinations: WinningCombination = new Map();
    for (const [key, value] of winningXCombinations) {
      if (winningYCombinations.has(key)) winningCombinations.set(key, value);
    }

    return {
      button: {
        a: initButton(3, buttonAX, buttonAY),
        b: initButton(3, buttonBX, buttonBY),
      },
      prize: initPrize(prizeX, prizeY),
      winningCombinations,
    };
  });
const initPrize = (x: number, y: number): Prize => ({ x, y });

export const partOne = (input = "") => {
  const machines: Machine[] = initMachines(input);
  const winnableMachines = machines.filter(filterMachines);
  const minimumMachineCosts = winnableMachines.map(
    ({ winningCombinations }) =>
      [...winningCombinations.values()].sort(
        (a: WinningCombinationValue, b: WinningCombinationValue) =>
          a.cost - b.cost
      )[0].cost
  );
  const totalCost = minimumMachineCosts.reduce(
    (total, cost) => total + cost,
    0
  );
  return totalCost;
};

export const partTwo = (input = "") => {
  return 0;
};
