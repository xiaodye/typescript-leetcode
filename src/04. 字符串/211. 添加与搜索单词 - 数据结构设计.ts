/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
export default class WordDictionary {
  private words = new Map<number, string[]>();

  constructor() {}

  addWord(word: string): void {
    /**
     * 若该字符串对应长度的数组已经存在，则只做添加
     * 若该字符串对应长度的数组还不存在，则先创建
     */
    if (this.words.has(word.length)) {
      this.words.get(word.length).push(word);
    } else {
      this.words.set(word.length, [word]);
    }
  }

  search(word: string): boolean {
    if (!this.words.has(word.length)) return false;

    // 情况一：参数不是正则
    if (!word.includes(".")) {
      return this.words.get(word.length).includes(word);
    }

    // 情况二：参数是正则
    const reg = new RegExp(word);

    // 只要数组中有一个匹配正则表达式的字符串，就返回true
    return this.words.get(word.length).some((item) => reg.test(item));
  }
}

// test
const wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // 返回 False
console.log(wordDictionary.search("bad")); // 返回 True
console.log(wordDictionary.search(".ad")); // 返回 True
console.log(wordDictionary.search("b..")); // 返回 True
