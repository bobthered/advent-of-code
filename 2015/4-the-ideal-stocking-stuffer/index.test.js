import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('abcdef', () => {
    expect(partOne('abcdef', 609043)).toBe(609043);
  })
  it('pqrstuv', () => {
    expect(partOne('pqrstuv', 1048970)).toBe(1048970);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input, 346386)).toBe(346386);
  })
})

describe('Part Two', () => {
  it('abcdef', () => {
    expect(partTwo('abcdef', 18549057)).toBe(18549057);
  })
  it('pqrstuv', () => {
    expect(partTwo('pqrstuv', 5714438)).toBe(5714438);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input, 9958218)).toBe(9958218);
  })
})