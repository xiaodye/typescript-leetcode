/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * @param s
 * @returns
 */
export default function lengthOfLastWord(s: string): number {
  // 1. 去除首尾空格
  // 2. 从后往前遍历，直到遇到空格

  let i = s.length - 1;
  let len = 0;

  // 去掉尾部空格
  while (s[i] === " ") i--;

  // 统计长度
  while (s[i] !== " ") {
    len++;
    i--;

    if (i < 0) break;
  }

  return len;
}
