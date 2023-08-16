/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param s
 * @returns
 */
export default function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  const set = new Set<string>();

  // i: 左指针， j: 右指针
  let j = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // 当j大于s.length时，就可以结束了
    if (j >= s.length) break;

    // 第一次不用删除
    if (i !== 0) {
      set.delete(s[i - 1]);
    }

    while (j < s.length && !set.has(s[j])) {
      set.add(s[j]);
      j++;
    }

    // 此时j指向当前无重复子串最后一个字符的下一个字符
    maxLen = Math.max(maxLen, j - i);
  }

  return maxLen;
}
