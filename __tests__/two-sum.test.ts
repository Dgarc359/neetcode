import { twoSum } from '../src/two-sum/main.js';

describe('two sums', () => {
  it('test case one', () => {
    const nums = [2, 7, 11, 15],
      target = 9;

    expect(twoSum(nums, target)).toEqual([1, 0]);
  });

  it('test case two', () => {
    const nums = [3, 2, 4],
      target = 6;

    expect(twoSum(nums, target)).toEqual([2, 1]);
  });

  it('test case three', () => {
    const nums = [3, 3],
      target = 6;

    expect(twoSum(nums, target)).toEqual([1, 0]);
  });
});
