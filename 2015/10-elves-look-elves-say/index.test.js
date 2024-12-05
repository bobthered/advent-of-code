import { readFile } from "fs/promises";
import { resolve } from "path";
import { describe, it, expect } from "vitest";
import { partOne, partTwo } from "./solution";

const example1 = await readFile(
  resolve(__dirname, "./inputs/example1.txt"),
  "utf8"
);
const example2 = await readFile(
  resolve(__dirname, "./inputs/example2.txt"),
  "utf8"
);
const input = await readFile(resolve(__dirname, "./inputs/input.txt"), "utf8");

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1, 5)).toBe(6);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(360154);
  });
});

describe("Part Two", () => {
  // it("Example", () => {
  //   expect(partTwo(example2)).toBe(14);
  // });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(5103798);
  });
});
