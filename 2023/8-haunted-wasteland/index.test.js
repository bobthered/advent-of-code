import { describe, it, expect } from 'vitest';
import { example1, example2, input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('Example 1', () => {
    expect(partOne(example1)).toBe(2);
  })
  it('Example 2', () => {
    expect(partOne(example2)).toBe(6);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(1);
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