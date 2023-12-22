/**
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 * 实现词典类 WordDictionary ：
 * - WordDictionary() 初始化词典对象
 * - void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 * - bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。
 * word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
 */
class WordDictionary {
    // key: 字符串的长度，value: 符合长度的字符串数组
    #words = new Map<number, string[]>();

    constructor() {}

    addWord(word: string): void {
        const wordLen = word.length;

        if (this.#words.has(wordLen)) {
            this.#words.get(wordLen).push(word);
        } else {
            this.#words.set(wordLen, [word]);
        }
    }

    search(word: string): boolean {
        // 1. len 不存在
        // 2. len 存在
        //   - 存在 .
        //   - 不存在 .
        const wordLen = word.length;

        if (!this.#words.has(wordLen)) return false;

        if (!word.includes(".")) {
            return this.#words.get(wordLen).includes(word);
        }

        const reg = new RegExp(word);

        return this.#words.get(wordLen).some((word) => reg.test(word));
    }
}

export default WordDictionary;
