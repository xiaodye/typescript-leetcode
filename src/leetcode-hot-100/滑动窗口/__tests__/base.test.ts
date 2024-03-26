import lengthOfLongestSubstring from "../3. 无重复字符的最长子串";

describe("滑动窗口", () => {
    it("3.无重复字符的最长子串", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });
});
