export const partOne = (input = "") => {
  let password = 0;
  let position = 50;

  const rotations = input.split("\n").map((string) => {
    const direction = string.charAt(0);
    const distance = +string.slice(1);

    return { direction, distance };
  });

  for (const { direction, distance } of rotations) {
    if (direction === "L") position -= distance % 100;
    if (direction === "R") position += distance % 100;

    if (position < 0) position += 100;
    if (position > 99) position -= 100;

    if (position === 0) password++;
  }

  return password;
};

export const partTwo = (input = "") => {
  let password = 0;
  let position = 50;

  const rotations = input.split("\n").map((string) => {
    const direction = string.charAt(0);
    const distance = +string.slice(1);

    return { direction, distance };
  });

  for (const { direction, distance } of rotations) {
    for (let i = 0; i < distance; i++) {
      if (direction === "L") position--;
      if (direction === "R") position++;

      if (position < 0) position += 100;
      if (position > 99) position -= 100;

      if (position === 0) password++;
    }
  }

  return password;
};
