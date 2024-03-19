// Given an integer array nums and an integer k, return the k most frequent elements.
// You may return the answer in any order.
// Beats 44.14% of users with TypeScript
export function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === k) {
    return nums;
  }
  const topFrequent: Set<number>[] = [];

  const freqMap = new Map<number, number>();

  for (const num of nums) {
    if (!freqMap.has(num)) {
      freqMap.set(num, 0);
    }

    freqMap.set(num, freqMap.get(num) + 1);
  }

  for (const [num, freq] of freqMap.entries()) {
    topFrequent[freq] = (topFrequent[freq] ?? new Set()).add(num);
  }

  const answer: number[] = [];

  topFrequent
    .filter((t) => t !== undefined)
    .forEach((_, i, arr) => {
      const innerIndex = arr.length - i - 1;
      const results = arr[innerIndex];
      for (const res of results) {
        answer.push(res);
      }
    });

  console.log('top k answer', answer.slice(k - 1));
  return answer.slice(0, k);
}
