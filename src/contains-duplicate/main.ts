// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.
// beats 95% of other submissions' runtime
export function containsDuplicate(nums: number[]): boolean {
  const s = new Map();
  return nums.some((num) => {
    if (s.has(num)) return true;
    else s.set(num, true);
    return false;
  });
}
