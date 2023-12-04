import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example', () => {
    expect(partOne('turn on 0,0 through 999,999')).toBe(1000 * 1000);
  })
  it('toggle 0,0 through 999,0', () => {
    expect(partOne('toggle 0,0 through 999,0')).toBe(1000);
  })
  it('turn off 499,499 through 500,500', () => {
    expect(partOne('turn off 499,499 through 500,500')).toBe(0);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(377891);
  })
})

describe('Part Two', () => {
  it('turn on 0,0 through 0,0', () => {
    expect(partTwo('turn on 0,0 through 0,0')).toBe(1);
  })
  it('toggle 0,0 through 999,999', () => {
    expect(partTwo('toggle 0,0 through 999,999')).toBe(2000000);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(14110788);
  })
})