// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
// Beats 82.79% of users with TypeScript
export function twoSum(nums: number[], target: number): number[] {
  let solution = [];

  const reverseIndex = new Map();

  // switching to a for loop and breaking will make this slightly faster
  nums.forEach((num, i) => {
    if (reverseIndex.has(target - num)) {
      solution[0] = i;
      solution[1] = reverseIndex.get(target - num);
    } else {
      reverseIndex.set(num, i);
    }
  });
  console.log(solution);

  return solution;
}
