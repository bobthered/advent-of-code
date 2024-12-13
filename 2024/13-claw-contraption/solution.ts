type Button = { cost: number; presses: number; x: number; y: number };
type Machine = {
  button: { a: Button; b: Button };
  prize: Prize;
};
type Prize = { x: number; y: number };

const filterMachines = ({ button: { a, b } }: Machine): boolean =>
  a.presses % 1 === 0 && b.presses % 1 === 0;
const initButton = (cost: number, x: number, y: number): Button => ({
  cost,
  presses: 0,
  x,
  y,
});
const initMachines = (input = "", distanceIncrease = 0) =>
  input.split("\r\n\r\n").map((string) => {
    const [_, buttonAX, buttonAY, buttonBX, buttonBY, prizeX, prizeY] = (
      string.match(
        /Button\sA:\sX\+(\d+),\sY\+(\d+)\r\nButton\sB:\sX\+(\d+),\sY\+(\d+)\r\nPrize:\sX=(\d+),\sY=(\d+)/
      ) || []
    ).map(Number);

    const a = initButton(3, buttonAX, buttonAY);
    const b = initButton(1, buttonBX, buttonBY);
    const prize = initPrize(distanceIncrease, prizeX, prizeY);
    const aPresses = Math.abs(
      (prize.x * b.y - prize.y * b.x) / (a.x * b.y - a.y * b.x)
    );
    const bPresses = Math.abs(
      (prize.x * a.y - prize.y * a.x) / (a.x * b.y - a.y * b.x)
    );
    a.presses = aPresses;
    b.presses = bPresses;

    return {
      button: {
        a,
        b,
      },
      prize,
    };
  });
const initPrize = (distanceIncrease: number, x: number, y: number): Prize => ({
  x: x + distanceIncrease,
  y: y + distanceIncrease,
});

export const partOne = (input = "", distanceIncrease = 0) => {
  const machines: Machine[] = initMachines(input, distanceIncrease);
  const winnableMachines = machines.filter(filterMachines);
  const machineCosts = winnableMachines.map(
    ({ button: { a, b } }) => a.presses * a.cost + b.presses * b.cost
  );
  const totalCost = machineCosts.reduce((total, cost) => total + cost, 0);
  return totalCost;
};

export const partTwo = (input = "") => {
  return partOne(input, 10000000000000);
};
