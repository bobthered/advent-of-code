import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.ts";
import { partOne, partTwo } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(13);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(25183);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(30);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(5667240);
  });
});
