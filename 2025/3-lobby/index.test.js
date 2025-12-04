import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.js";
import { partOne, partTwo } from "./solution.js";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(357);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(16973);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(3121910778619);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(168027167146027);
  });
});
