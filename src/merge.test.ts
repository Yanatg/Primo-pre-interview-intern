// merge.test.ts

import { merge } from './merge';

describe('merge', () => {
  it('should merge three sorted arrays into a single sorted array', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 8, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should handle empty arrays', () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 8, 7];
    const expected = [2, 4, 6, 7, 8, 9];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should handle arrays with duplicate values', () => {
    const collection1 = [1, 3, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 8, 7, 7];
    const expected = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should handle arrays with negative values', () => {
    const collection1 = [-5, -3, -1];
    const collection2 = [-4, -2, 0];
    const collection3 = [3, 2, 1];
    const expected = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  it('should handle arrays with single element', () => {
    const collection1 = [1];
    const collection2 = [2];
    const collection3 = [3];
    const expected = [1, 2, 3];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });
});