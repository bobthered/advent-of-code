import { describe, it, expect } from 'vitest';
import { example1, input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example', () => {
    expect(partOne(example1)).toBe(288);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(800280);
  })
})

describe('Part Two', () => {
  it('Example', () => {
    expect(partTwo(example1)).toBe(71503);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(45128024);
  })
})