import rob from "../198. 打家劫舍";
import rob2 from "../213. 打家劫舍 II";

describe("打家劫舍", () => {
    it("198. 打家劫舍", () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

    it("213. 打家劫舍 II", () => {
        expect(rob2([2, 3, 2])).toBe(3);
        expect(rob2([1, 2, 3, 1])).toBe(4);
        expect(rob2([1, 2, 3])).toBe(3);
        expect(rob2([1])).toBe(1);
    });
});
