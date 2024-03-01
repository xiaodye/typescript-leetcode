import bubbleSort from "../冒泡排序";
import shellSort from "../希尔排序";
import mergeSort from "../归并排序";
import quickSort from "../快速排序";
import insertSort from "../插入排序";
import selectSort from "../选择排序";

describe("排序专题", () => {
    it("冒泡排序", () => {
        expect(bubbleSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    it("选择排序", () => {
        expect(selectSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    it("插入排序", () => {
        expect(insertSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    it("归并排序", () => {
        expect(mergeSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    it("快速排序", () => {
        expect(quickSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });

    it("希尔排序", () => {
        expect(shellSort([4, 2, 5, 1, 7, 9])).toEqual([1, 2, 4, 5, 7, 9]);
    });
});
