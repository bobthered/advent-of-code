import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input";
import { partOne, partTwo } from "./solution";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(114);
  });

  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(1762065988);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example1)).toBe(2);
  });

  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(1066);
  });
});
