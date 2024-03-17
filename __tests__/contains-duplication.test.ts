import { containsDuplicate } from '../src/contains-duplicate/main.js';
describe('contains duplicate', () => {
  it('test case one', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toEqual(true);
  });

  it('test case two', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toEqual(false);
  });

  it('test case three', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toEqual(true);
  });

  it('trillion size array with dupes', () => {
    const bigArray = new Array(100_000);
    bigArray.fill(0);
    bigArray[0] = 1;
    bigArray[bigArray.length - 1] = 1;
    expect(containsDuplicate(bigArray)).toEqual(true);
  });
});
