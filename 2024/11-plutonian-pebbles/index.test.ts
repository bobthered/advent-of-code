import { expect } from "jsr:@std/expect";
import { resolve } from "jsr:@std/path";
import { describe, it } from "jsr:@std/testing/bdd";
import { partOne, partTwo } from "./solution.ts";

const example1 = await Deno.readTextFile(
  resolve(import.meta.dirname || "", "./inputs/example1.txt")
);
// const example2 = await Deno.readTextFile(
//   resolve(import.meta.dirname, "./inputs/example2.txt")
// );
const input = await Deno.readTextFile(
  resolve(import.meta.dirname || "", "./inputs/input.txt")
);

describe("Part One", () => {
  it("Example - 6 blinks", () => {
    expect(partOne(example1, 6)).toBe(22);
  });
  it("User Puzzle Input - 25 blinks", () => {
    expect(partOne(input)).toBe(197357);
  });
});

describe("Part Two", () => {
  it("User Puzzle Input - 30 blinks", () => {
    expect(partTwo(input, 30)).toBe(1591642);
  });
  it("User Puzzle Input - 75 blinks", () => {
    expect(partTwo(input, 75)).toBe(234568186890978);
  });
});
