export const partOne = (input = "") => {
  const ranges = input.split(",").map((range) => {
    const [firstId, lastId] = range.split("-").map(Number);

    return { firstId, lastId };
  });

  let invalidIdSum = 0;

  for (const { firstId, lastId } of ranges) {
    for (let currentId = firstId; currentId <= lastId; currentId++) {
      const currentIdString = currentId.toString();
      const mid = Math.ceil(currentIdString.length / 2);
      const firstHalf = currentIdString.substring(0, mid);
      const secondHalf = currentIdString.substring(mid);

      if (firstHalf === secondHalf) invalidIdSum += currentId;
    }
  }

  return invalidIdSum;
};

export const partTwo = (input = "") => {
  const ranges = input.split(",").map((range) => {
    const [firstId, lastId] = range.split("-").map(Number);

    return { firstId, lastId };
  });

  let invalidIdSum = 0;

  for (const { firstId, lastId } of ranges) {
    for (let i = firstId; i <= lastId; i++) {
      const currentIdString = String(i);
      for (let j = 1; j <= currentIdString.length / 2; j++) {
        const subString = currentIdString.substring(0, j);
        const repeatCount = currentIdString.length / j;
        if (Number.isInteger(repeatCount)) {
          if (subString.repeat(repeatCount) === currentIdString) {
            invalidIdSum += i;
            break;
          }
        }
      }
    }
  }

  return invalidIdSum;
};
