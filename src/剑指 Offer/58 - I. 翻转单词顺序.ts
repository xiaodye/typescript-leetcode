/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
 * 例如输入字符串"I am a student. "，则输出"student. a am I"。
 * @param s
 * @returns
 */
export default function reverseWords(s: string): string {
  const dequeue: string[] = [];
  let word = "";

  let l = 0;
  let r = s.length - 1;

  while (s[l] === " ") l++;
  while (s[r] === " ") r--;

  while (l <= r) {
    if (s[l] === " " && word !== "") {
      dequeue.unshift(word);
      word = "";
    } else if (s[l] !== " ") {
      word += s[l];
    }

    l++;
  }

  dequeue.unshift(word);

  return dequeue.join(" ");
}
