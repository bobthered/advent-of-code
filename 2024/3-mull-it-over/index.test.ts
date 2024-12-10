import { expect } from "jsr:@std/expect";
import { resolve } from "jsr:@std/path";
import { describe, it } from "jsr:@std/testing/bdd";
import { partOne, partTwo } from "./solution.ts";

const example1 = await Deno.readTextFile(
  resolve(import.meta.dirname || "", "./inputs/example1.txt")
);
const example2 = await Deno.readTextFile(
  resolve(import.meta.dirname || "", "./inputs/example2.txt")
);
const input = await Deno.readTextFile(
  resolve(import.meta.dirname || "", "./inputs/input.txt")
);

describe("Part One", () => {
  it("Example", () => {
    expect(partOne(example1)).toBe(161);
  });
  it("User Puzzle Input", () => {
    expect(partOne(input)).toBe(179834255);
  });
});

describe("Part Two", () => {
  it("Example", () => {
    expect(partTwo(example2)).toBe(48);
  });
  it("User Puzzle Input", () => {
    expect(partTwo(input)).toBe(80570939);
  });
});