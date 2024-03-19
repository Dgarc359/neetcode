import { topKFrequent } from '../src/arrays-and-hashing/top-k-elements.js';

describe('top k frequent elements', () => {
  it('test case one', () => {
    const nums = [1, 1, 1, 2, 2, 3],
      k = 2;

    expect(topKFrequent(nums, k)).toEqual([1, 2]);
  });

  it('test case two', () => {
    const nums = [1],
      k = 1;
    expect(topKFrequent(nums, k)).toEqual([1]);
  });
});
