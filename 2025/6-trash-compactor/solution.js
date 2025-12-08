export const partOne = (input = "") => {
  // parse input
  const rows = input.split("\n");

  const values = rows.slice(0, rows.length - 1).map((row) =>
    row
      .trim()
      .split(/\s+/g)
      .map((string) => Number(string))
  );

  const operators = rows
    .slice(rows.length - 1)[0]
    .trim()
    .split(/\s+/g);

  let grandTotal = 0;

  operators.forEach((operator, operatorIndex) => {
    let total = 0;
    if (operator === "*") total = 1;

    values.forEach((row) => {
      if (operator === "+") total += row[operatorIndex];
      if (operator === "*") total *= row[operatorIndex];
    });

    grandTotal += total;
  });

  return grandTotal;
};

export const partTwo = (input = "") => {
  // parse input
  const rows = input.split("\n");

  const values = rows
    .slice(0, rows.length - 1)
    .map((row) => row.split("").reverse());

  const operators = rows
    .slice(rows.length - 1)[0]
    .trim()
    .split(/\s+/g)
    .reverse();

  let grandTotal = 0;
  let operatorIndex = 0;
  let operator = operators[operatorIndex];

  let total = 0;
  if (operator === "*") total = 1;

  for (let valueIndex = 0; valueIndex < values[0].length; valueIndex++) {
    const value = Number(
      values
        .map((row) => row[valueIndex])
        .filter((char) => char !== " ")
        .join("")
    );

    if (value !== 0) {
      if (operator === "+") total += value;
      if (operator === "*") total *= value;
    } else {
      operatorIndex++;
      operator = operators[operatorIndex];

      grandTotal += total;
      total = 0;
      if (operator === "*") total = 1;
    }
  }

  grandTotal += total;

  return grandTotal;
};
