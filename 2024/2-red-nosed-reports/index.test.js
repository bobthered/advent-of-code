import { describe, it, expect } from "vitest";
import { example1, input } from "./input";
import { partOne, partTwo } from "./solution";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(2);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(572);
  });
});

// describe("Part Two", () => {
//   it("Example", () => {
//     expect(partTwo(example1)).toBe(31);
//   });
//   it("User Puzzle Input", () => {
//     expect(partTwo(input)).toBe(23082277);
//   });
// });
