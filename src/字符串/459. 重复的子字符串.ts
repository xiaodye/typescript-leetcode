/**
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * @param s
 * @returns
 */
export default function repeatedSubstringPattern(s: string): boolean {
  const str = (s + s).slice(1, -1);

  return str.indexOf(s) !== -1;
}
