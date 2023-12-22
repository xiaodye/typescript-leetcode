import isPalindrome from "../125. 验证回文串";
import validPalindrome from "../680. 验证回文串 II";
import reverseString from "../344. 反转字符串";
import reverseStr from "../541. 反转字符串 II";
import repeatedSubstringPattern from "../459. 重复的子字符串";
import reverseWords from "../151. 反转字符串中的单词";
import WordDictionary from "../211. 添加与搜索单词 - 数据结构设计";

describe("../125. 验证回文串", () => {
    it("test-1", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
    });
});

describe("../680. 验证回文串 II", () => {
    it("test-1", () => {
        expect(validPalindrome("abc")).toBeFalsy();
    });

    it("test-2", () => {
        expect(validPalindrome("abca")).toBeTruthy();
    });
});

describe("344. 反转字符串", () => {
    it("test-1", () => {
        const strs: string[] = ["h", "e", "l", "l", "o"];
        reverseString(strs);
        expect(strs).toEqual(["o", "l", "l", "e", "h"]);
    });
});

describe("541. 反转字符串 II", () => {
    it("test-1", () => {
        expect(reverseStr("abcdefg", 2)).toBe("bacdfeg");
    });
});

describe("459. 重复的子字符串", () => {
    it("test-1", () => {
        expect(repeatedSubstringPattern("abcabcabcabc")).toBeTruthy();
    });
    it("test-2", () => {
        expect(repeatedSubstringPattern("abc")).toBeFalsy();
    });
});

describe("151. 反转字符串中的单词", () => {
    it("test-1", () => {
        expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    });

    it("test-2", () => {
        expect(reverseWords("  hello world  ")).toBe("world hello");
    });

    it("test-3", () => {
        expect(reverseWords("a good   example")).toBe("example good a");
    });
});

describe("211. 添加与搜索单词 - 数据结构设计", () => {
    it("test-1", () => {
        const wordDictionary = new WordDictionary();
        wordDictionary.addWord("bad");
        wordDictionary.addWord("dad");
        wordDictionary.addWord("mad");
        expect(wordDictionary.search("pad")).toBeFalsy();
        expect(wordDictionary.search("bad")).toBeTruthy();
        expect(wordDictionary.search(".ad")).toBeTruthy();
        expect(wordDictionary.search("b..")).toBeTruthy();
    });
});
