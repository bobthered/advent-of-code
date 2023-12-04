import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('ugknbfddgicrmopn', () => {
    expect(partOne('ugknbfddgicrmopn')).toBe(1);
  })
  it('aaa', () => {
    expect(partOne('aaa')).toBe(1);
  })
  it('jchzalrnumimnmhp', () => {
    expect(partOne('jchzalrnumimnmhp')).toBe(0);
  })
  it('haegwjzuvuyypxyu', () => {
    expect(partOne('haegwjzuvuyypxyu')).toBe(0);
  })
  it('dvszwmarrgswjxmb', () => {
    expect(partOne('dvszwmarrgswjxmb')).toBe(0);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(236);
  })
})

// describe('Part Two', () => {
//   it('Example', () => {
//     expect(partTwo(example2)).toBe(1);
//   })
// 
//   it('User Puzzle Input', () => {
//     expect(partTwo(input)).toBe(1);
//   })
// })