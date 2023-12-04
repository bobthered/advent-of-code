import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('2x3x4  = 58', () => {
    expect(partOne('2x3x4')).toBe(58);
  })
  it('1x1x10 = 43', () => {
    expect(partOne('1x1x10')).toBe(43);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(1586300);
  })
})

describe('Part Two', () => {
  it('2x3x4  = 34', () => {
    expect(partTwo('2x3x4')).toBe(34);
  })
  it('1x1x10 = 14', () => {
    expect(partTwo('1x1x10')).toBe(14);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(3737498);
  })
})