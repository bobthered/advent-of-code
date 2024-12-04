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
    expect(partOne(example1)).toBe(609043);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(346386);
  });
});

describe("Part Two", () => {
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(9958218);
  });
});
