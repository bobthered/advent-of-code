import { describe, it, expect } from 'vitest';
import { input } from './input';
import { partOne, partTwo } from './solution';

describe('Part One', () => {
  it('>', () => {
    expect(partOne('>')).toBe(2);
  })
  it('^>v<', () => {
    expect(partOne('^>v<')).toBe(4);
  })
  it('^v^v^v^v^v', () => {
    expect(partOne('^v^v^v^v^v')).toBe(2);
  })

  it('User Puzzle Input', () => {
    expect(partOne(input)).toBe(2081);
  })
})

describe('Part Two', () => {
  it('^v', () => {
    expect(partTwo('^v')).toBe(3);
  })
  it('^>v<', () => {
    expect(partTwo('^>v<')).toBe(3);
  })
  it('^v^v^v^v^v', () => {
    expect(partTwo('^v^v^v^v^v')).toBe(11);
  })

  it('User Puzzle Input', () => {
    expect(partTwo(input)).toBe(2341);
  })
})