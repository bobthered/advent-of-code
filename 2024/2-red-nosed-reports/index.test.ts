import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { example1, input } from "./input.ts";
import { partOne, partTwo } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(2);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(572);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example1)).toBe(4);
  });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(612);
  });
});
