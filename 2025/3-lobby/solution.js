const calcualteMaximumJoltage = (input, batteryCount = 2) => {
  const banks = input.split("\n").map((bank) => bank.split("").map(Number));

  let maximumJoltage = 0;

  banks.forEach((bank) => {
    let leftPointer = 0;
    let rightPointer = bank.length - batteryCount + leftPointer;

    let joltageArray = [];

    for (
      let rightPointer = bank.length - batteryCount;
      rightPointer < bank.length;
      rightPointer++
    ) {
      const batteryCandididates = bank.slice(leftPointer, rightPointer + 1);
      const maxBattery = Math.max(...bank.slice(leftPointer, rightPointer + 1));
      joltageArray.push(maxBattery);
      leftPointer += batteryCandididates.indexOf(maxBattery) + 1;
    }

    const joltage = +joltageArray.join("");
    maximumJoltage += joltage;
  });

  return maximumJoltage;
};

export const partOne = (input = "") => {
  const maximumJoltage = calcualteMaximumJoltage(input);

  return maximumJoltage;
};

export const partTwo = (input = "") => {
  const maximumJoltage = calcualteMaximumJoltage(input, 12);

  return maximumJoltage;
};
