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
  it("Example", () => {
    expect(partOne(example1, { height: 7, seconds: 100, width: 11 })).toBe(12);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(224438715);
  });
});

describe("Part Two", () => {
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(7603);
  });
});
