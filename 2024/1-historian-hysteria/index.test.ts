import { describe, it } from "jsr:@std/testing/bdd";
import { example1, input } from "./input.ts";
import { partOne, partTwo } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(11);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(2375403);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example1)).toBe(31);
  });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(23082277);
  });
});
