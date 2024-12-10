import { describe, it, expect } from "vitest";
import { example1, example2, input } from "./input.ts";
import { solution } from "./solution.ts";

describe("Part One", () => {
  it("Example", () => {
    expect(solution(example1)).toBe(1);
  });

  // it('User Puzzle Input', () => {
  //   expect(solution(input)).toBe(1);
  // })
});
