import { describe, it, expect } from 'vitest';
import { example1, example2, input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example', () => {
    expect(partOne(example1)).toBe(4361);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(527364);
  })
})

describe('Part Two', () => {
  it('Example', () => {
    expect(partTwo(example2)).toBe(467835);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(79026871);
  })
})