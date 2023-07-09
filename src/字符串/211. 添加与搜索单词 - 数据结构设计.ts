/**
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 * 实现词典类 WordDictionary ：
 * - WordDictionary() 初始化词典对象
 * - void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 * - bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。
 * word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
 */
export default class WordDictionary {
  // key: 字符串的长度，value: 符合长度的字符串数组
  private words = new Map<number, string[]>();

  constructor() {}

  addWord(word: string): void {
    // 首先根据字符串的长度判断 map 当中是否存在
    const len = word.length;

    if (this.words.has(len)) {
      this.words.get(len).push(word);
    } else {
      this.words.set(len, [word]);
    }
  }

  search(word: string): boolean {
    const len = word.length;

    // 1. 若 map 不存在该长度的 key，直接 ruturn false;
    if (!this.words.has(len)) return false;

    // 2. 若字符串中不存在 . （无正则）
    if (!word.includes(".")) {
      this.words.get(len).includes(word);
    }

    // 3. 字符串中存在 .
    const reg = new RegExp(word);

    return this.words.get(len).some((item) => reg.test(item));
  }
}
