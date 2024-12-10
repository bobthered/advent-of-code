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
    expect(partOne(example1)).toBe(3749);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(1260333054159);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example1)).toBe(11387);
  });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(162042343638683);
  });
});
