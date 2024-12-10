const convertDiskMapToBlocks = (diskMap) =>
  diskMap.split("").reduce((total, string, index) => {
    const numberOfRepeats = +string;
    const value = index % 2 === 0 ? Math.floor(index / 2) : "";
    for (let i = 0; i < numberOfRepeats; i++) {
      total.push(value);
    }
    return total;
  }, []);

const defragmentBlocks = (blocks) => {
  let leftPointer = 0;
  let rightPointer = blocks.length - 1;
  while (leftPointer !== rightPointer) {
    if (blocks[leftPointer] !== "") {
      leftPointer++;
    }
    if (blocks[rightPointer] === "") {
      rightPointer--;
    }
    if (blocks[leftPointer] === "" && blocks[rightPointer] !== "") {
      [blocks[leftPointer], blocks[rightPointer]] = [
        blocks[rightPointer],
        blocks[leftPointer],
      ];
      leftPointer++;
      rightPointer--;
    }
  }
  blocks = blocks.filter((block) => block !== "");
  return blocks;
};

export const partOne = (diskMap = "") => {
  const blocks = convertDiskMapToBlocks(diskMap);
  const defragmentedBlocks = defragmentBlocks(blocks);
  const checkSum = defragmentedBlocks.reduce(
    (total, value, index) => total + value * index,
    0
  );

  return checkSum;
};

export const partTwo = (input = "") => {};
