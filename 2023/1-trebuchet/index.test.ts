import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.ts";
import { partOne, partTwo } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(142);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(55621);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(281);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(53592);
  });
});
