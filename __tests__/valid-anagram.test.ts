import { isAnagram } from '../src/valid-anagram/main.js';

describe('valid anagram', () => {
  it('test case one', () => {
    const s = 'anagram',
      t = 'nagaram';

    expect(isAnagram(s, t)).toBeTruthy();
  });

  it('test case two', () => {
    const s = 'rat',
      t = 'car';

    expect(isAnagram(s, t)).toBeFalsy();
  });
});
