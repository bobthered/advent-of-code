import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('abcdef', () => {
    expect(partOne('abcdef')).toBe(609043);
  })
  it('pqrstuv', () => {
    expect(partOne('pqrstuv')).toBe(1048970);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(346386);
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