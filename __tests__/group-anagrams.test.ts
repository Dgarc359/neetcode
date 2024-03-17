import { groupAnagrams } from '../src/group-anagrams.js';

describe('group anagrams', () => {
  it('test case one', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

    expect(groupAnagrams(strs)).toEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
  });

  it('test case two', () => {
    const strs = [''];
    expect(groupAnagrams(strs)).toEqual([['']]);
  });

  it('test case three', () => {
    const strs = ['a'];
    expect(groupAnagrams(strs)).toEqual([['a']]);
  });
});
