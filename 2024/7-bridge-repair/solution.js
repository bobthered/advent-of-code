const parseRow = (row) => {
  const match = row.match(/(\d+):\s(.+)/);
  const sum = +match[1];
  const numbers = match[2].split(" ").map((string) => +string);
  const operatorDecimal = Math.pow(2, numbers.length - 1);
  const padStartMaxLength = operatorDecimal.toString(2).length - 1;
  return { sum, numbers, operatorDecimal, padStartMaxLength };
};

export const partOne = (input = "") => {
  const equations = input.split("\r\n").map(parseRow);
  const trueEquations = equations.filter(
    ({ sum, numbers, operatorDecimal, padStartMaxLength }) => {
      let trueEquation = false;
      for (
        let operatorIndex = 0;
        operatorIndex < operatorDecimal;
        operatorIndex++
      ) {
        const binary = operatorIndex
          .toString(2)
          .padStart(padStartMaxLength, "0")
          .split("");
        const equationSum = [...numbers].reduce((total, number, index) => {
          if (index === 0) return number;
          if (binary[index - 1] === "0") total *= number;
          if (binary[index - 1] === "1") total += number;
          return total;
        }, 0);
        if (equationSum === sum) {
          trueEquation = true;
          break;
        }
      }
      return trueEquation;
    }
  );

  const totalCalibration = trueEquations.reduce(
    (total, equation) => total + equation.sum,
    0
  );

  return totalCalibration;
};

export const partTwo = (input = "") => {};
