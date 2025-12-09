import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.js";
import { partOne, partTwo } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(40);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input, 1000)).toBe(133574);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(25272);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(2435100380);
  });
});
