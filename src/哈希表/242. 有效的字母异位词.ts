/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 *
 * - 时间复杂度：O(n)，其中 nnn 为 sss 的长度。
 * - 空间复杂度：O(S)，其中 SSS 为字符集大小，此处 S=26。
 *
 * @param s
 * @param t
 * @returns
 */
export default function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const table = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    table[s.codePointAt(i) - "a".codePointAt(0)]++;
  }

  for (let i = 0; i < t.length; i++) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;

    // 在 -- 的过程中，如果出现某个字符次数小于 0 的情况，那肯定是不符合异位词的
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) return false;
  }

  return true;
}
