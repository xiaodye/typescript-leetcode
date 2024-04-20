import wordBreak from "../139. 单词拆分";
import coinChange from "../322. 零钱兑换";
import change from "../518. 零钱兑换 II";

describe("完全背包", () => {
    it("322. 零钱兑换", () => {
        expect(coinChange([1, 2, 5], 11)).toBe(3);
        expect(coinChange([2], 3)).toBe(-1);
        expect(coinChange([1], 0)).toBe(0);
    });

    it("322. 零钱兑换 II", () => {
        expect(change(5, [1, 2, 5])).toBe(4);
        expect(change(3, [2])).toBe(0);
        expect(change(10, [10])).toBe(1);
    });

    it("139. 单词拆分", () => {
        expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
        expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
        expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
    });
});
