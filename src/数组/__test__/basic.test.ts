import twoSum from "../1. 两数之和";
import minSubArrayLen from "../209. 长度最小的子数组";

describe("数组", () => {
    it("1. 两数之和", () => {
        expect(twoSum([1, 5, 6, 7], 11)).toEqual([1, 2]);
    });

    it("209. 长度最小的子数组", () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
        expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
        expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
    });
});
