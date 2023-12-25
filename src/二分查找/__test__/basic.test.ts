import searchInsert from "../35. 搜索插入位置";
import myPow from "../50. Pow(x, n)";
import mySqrt from "../69. x 的平方根";
import isPerfectSquare from "../367. 有效的完全平方数";

describe("35. 搜索插入位置", () => {
    it("test-1", () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});

describe("50. Pow(x, n)", () => {
    it("test-1", () => {
        expect(myPow(2.0, 10)).toBe(1024.0);
        expect(myPow(2.1, 3)).toBeCloseTo(9.261);
        expect(myPow(2.0, -2)).toBe(0.25);
    });
});

describe("69. x 的平方根", () => {
    it("test-1", () => {
        expect(mySqrt(4)).toBe(2);
        expect(mySqrt(8)).toBe(2);
        expect(mySqrt(0)).toBe(0);
    });
});

describe("367. 有效的完全平方数", () => {
    it("test-1", () => {
        expect(isPerfectSquare(16)).toBe(true);
        expect(isPerfectSquare(14)).toBe(false);
    });
});
