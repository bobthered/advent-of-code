const parseRow = (row, radix) => {
  const match = row.match(/(\d+):\s(.+)/);
  const sum = +match[1];
  const numbers = match[2].split(" ").map((string) => +string);
  const operatorDecimal = Math.pow(radix, numbers.length - 1);
  const padStartMaxLength = operatorDecimal.toString(radix).length - 1;
  return { sum, numbers, operatorDecimal, padStartMaxLength };
};

export const partOne = (input = "", radix = 2) => {
  const equations = input.split("\r\n").map((row) => parseRow(row, radix));
  const trueEquations = equations.filter(
    ({ sum, numbers, operatorDecimal, padStartMaxLength }) => {
      let trueEquation = false;
      for (
        let operatorIndex = 0;
        operatorIndex < operatorDecimal;
        operatorIndex++
      ) {
        const binary = operatorIndex
          .toString(radix)
          .padStart(padStartMaxLength, "0")
          .split("");
        // console.log({ operatorIndex, binary });
        const equationSum = [...numbers].reduce((total, number, index) => {
          if (index === 0) return number;
          if (binary[index - 1] === "0") total *= number;
          if (binary[index - 1] === "1") total += number;
          if (binary[index - 1] === "2")
            total = +(total.toString() + number.toString());
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

export const partTwo = (input = "") => partOne(input, 3);
