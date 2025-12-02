import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.js";
import { partOne, partTwo } from "./solution.js";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(1227775554);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(53420042388);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(4174379265);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(69553832684);
  });
});
