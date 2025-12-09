import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.ts";
import { partOne, partTwo } from "./solution/index.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(50);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(4777824480);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(24);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(1542119040);
  });
});
