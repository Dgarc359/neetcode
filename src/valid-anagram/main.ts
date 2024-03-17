// Beats 36.66% of users with TypeScript
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sArray = s.split('').sort();
  const tArray = t.split('').sort();

  return sArray.every((c, i) => c === tArray[i]);
}
