/**
 * 冒泡排序
 *
 * 时间复杂度：O(n2)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function bubbleSort(arr: number[]): number[] {
    // 外层为轮次，需要 len - 1 轮
    // 内层交换，从后往前排，过程类似冒泡
    // 优化，如果在某一轮中没有发生交换，说明当前序列以及有序，直接退出

    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;

        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                flag = true;
            }
        }

        if (!flag) {
            break;
        }
    }

    return arr;
}
