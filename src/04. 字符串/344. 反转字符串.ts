/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
 * @param s
 */
export default function reverseString(s: string[]): void {
  const len = s.length;

  for (let i = 0, j = len - 1; i < len / 2; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
}
