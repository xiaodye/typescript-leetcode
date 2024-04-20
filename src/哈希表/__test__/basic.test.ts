import isAnagram from "../242. 有效的字母异位词";
import intersection from "../349. 两个数组的交集";
import isHappy from "../202. 快乐数";
import canConstruct from "../383. 赎金信";

describe("242. 有效的字母异位词", () => {
    it("test-1", () => {
        expect(isAnagram("anagram", "nagaram")).toBeTruthy();
        expect(isAnagram("rat", "car")).toBeFalsy();
        expect(isAnagram("da", "a")).toBeFalsy();
    });
});

describe("242. 有效的字母异位词", () => {
    it("test-1", () => {
        expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([4, 9]);
    });
});

describe("202. 快乐数", () => {
    it("test-1", () => {
        expect(isHappy(19)).toBeTruthy();
        expect(isHappy(2)).toBeFalsy();
    });
});

describe("383. 赎金信", () => {
    it("test-1", () => {
        expect(canConstruct("aa", "aab")).toBeTruthy();
        expect(canConstruct("a", "b")).toBeFalsy();
        expect(canConstruct("aa", "ab")).toBeFalsy();
    });
});
