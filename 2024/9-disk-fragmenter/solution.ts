type Block = number | "";

const convertDiskMapToBlocks = (diskMap: string) =>
  diskMap.split("").reduce((blocks: Block[], string, index) => {
    const numberOfRepeats = +string;
    const value = index % 2 === 0 ? Math.floor(index / 2) : "";
    for (let i = 0; i < numberOfRepeats; i++) {
      blocks.push(value);
    }
    return blocks;
  }, []);

const defragmentBlocks = (blocks: Block[]): number[] => {
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
  const defragmentBlocks = blocks.filter((block) => block !== "");
  return defragmentBlocks;
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

export const partTwo = (diskMap = "") => {
  const arr = [];

  for (let i = 0; i < diskMap.length; i++) {
    const fileSize = parseInt(diskMap[i * 2]);
    const freeSpace = parseInt(diskMap[i * 2 + 1]);
    for (let j = 0; j < fileSize; j++) arr.push(`${i}`);
    for (let j = 0; j < freeSpace; j++) arr.push(".");
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== ".") {
      const blockIdxs = [];
      for (let j = i; j >= 0; j--) {
        if (arr[j] == arr[i]) {
          blockIdxs.push(j);
        } else {
          for (let k = 0; k < i; k++) {
            if (arr[k] === ".") {
              let dotBlockIdxs = [];
              for (let l = k; l < arr.length; l++) {
                if (arr[l] === arr[k]) {
                  dotBlockIdxs.push(l);
                } else {
                  if (blockIdxs.length <= dotBlockIdxs.length) {
                    for (let m = 0; m < blockIdxs.length; m++) {
                      if (blockIdxs[m] > dotBlockIdxs[m]) {
                        const ch: string = arr[blockIdxs[m]];
                        arr[blockIdxs[m]] = arr[dotBlockIdxs[m]];
                        arr[dotBlockIdxs[m]] = ch;
                      }
                    }
                    break;
                  } else {
                    dotBlockIdxs = [];
                  }
                }
              }
            }
          }

          i = j + 1;
          break;
        }
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ".") {
      sum += i * parseInt(arr[i]);
    }
  }
  return sum;
};
