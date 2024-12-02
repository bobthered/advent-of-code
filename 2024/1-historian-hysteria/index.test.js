import { describe, it, expect } from "vitest";
import { example1, input } from "./input";
import { partOne } from "./solution";

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(11);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(2375403);
  });
});
