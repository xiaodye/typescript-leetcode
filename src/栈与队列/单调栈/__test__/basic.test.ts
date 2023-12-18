import dailyTemperatures from "../739. 每日温度";
import nextGreaterElement from "../496. 下一个更大元素 I";
import nextGreaterElements from "../503. 下一个更大元素 II";

describe("739. 每日温度", () => {
    it("test-1", () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
        expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
    });
});

describe("496. 下一个更大元素 I", () => {
    it("test-1", () => {
        expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    });
});

describe("503. 下一个更大元素 II", () => {
    it("test-1", () => {
        expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2]);
        expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4]);
    });
});
