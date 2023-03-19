/**
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * @param s
 * @param t
 * @returns
 */
export default function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i === s.length;
}
