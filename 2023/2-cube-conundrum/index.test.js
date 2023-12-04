import { describe, it, expect } from 'vitest';
import { example1, example2, input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example', () => {
    expect(partOne(example1)).toBe(8);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(3059);
  })
})

describe('Part Two', () => {
  it('Example', () => {
    expect(partTwo(example2)).toBe(2286);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(65371);
  })
})