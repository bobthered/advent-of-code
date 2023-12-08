import { describe, it, expect } from 'vitest';
import { example1, example2, example3, input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example 1', () => {
    expect(partOne(example1)).toBe(2);
  })
  it('Example 2', () => {
    expect(partOne(example2)).toBe(6);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(21797);
  })
})

describe('Part Two', () => {
  it('Example 3', () => {
    expect(partTwo(example3)).toBe(6);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(23977527174353);
  })
})