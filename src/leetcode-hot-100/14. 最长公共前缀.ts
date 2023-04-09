/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param strs
 * @returns
 */
export default function longestCommonPrefix(strs: string[]): string {
  if (strs.length == 0) return "";

  const minLen = Math.min(...strs.map((str) => str.length));

  const prefix: string[] = [];

  for (let i = 0; i < minLen; i++) {
    const chars = strs.map((str) => str[i]);

    if (new Set([...chars]).size !== 1) {
      return prefix.join("");
    } else {
      prefix.push(chars[0]);
    }
  }

  return prefix.join("");
}
