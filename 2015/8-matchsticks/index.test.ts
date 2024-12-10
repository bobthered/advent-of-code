import { expect } from "jsr:@std/expect";
import { resolve } from "jsr:@std/path";
import { describe, it } from "jsr:@std/testing/bdd";
import { partOne, partTwo } from "./solution.ts";

const example1 = await Deno.readTextFile(
  resolve(import.meta.dirname, "./inputs/example1.txt")
);
// const example2 = await Deno.readTextFile(
//   resolve(import.meta.dirname, "./inputs/example2.txt")
// );
const input = await Deno.readTextFile(
  resolve(import.meta.dirname, "./inputs/input.txt")
);

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(12);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(1342);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example1)).toBe(19);
  });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(2074);
  });
});
