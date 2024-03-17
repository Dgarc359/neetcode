// Beats 49.55% of users with TypeScript
export function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];
  const solution = [];
  const hm = new Map<string, string[]>();
  for (const str of strs) {
    const occurrences = new Array(26).fill(0);
    str.split('').forEach((c) => {
      occurrences[c.charCodeAt(0) - 97] += 1;
    });
    const freq = occurrences.join(',');

    if (hm.has(freq)) {
      const oldArr = hm.get(freq);
      oldArr.push(str);
      hm.set(freq, oldArr);
    } else {
      hm.set(freq, [str]);
    }
  }
  console.log(hm);

  for (const anagrams of hm.values()) {
    solution.push(anagrams);
  }

  console.log(solution);
  return solution;
}
