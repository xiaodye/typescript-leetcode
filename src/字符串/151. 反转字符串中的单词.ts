/**
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 *
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(n)
 *
 * @param s
 * @returns
 */
export default function reverseWords(s: string): string {
  // 定义双端队列
  const queue: string[] = [];
  let word = "";

  let left = 0;
  let right = s.length - 1;

  // 去除首尾空格
  while (s[left] === " ") left++;
  while (s[right] === " ") right--;

  while (left <= right) {
    let char = s[left];

    if (char === " " && word !== "") {
      queue.unshift(word);
      word = "";
    } else if (char !== " ") {
      word += char;
    }

    left++;
  }

  queue.unshift(word);

  return queue.join(" ");
}
