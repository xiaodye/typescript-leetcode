/**
 * 选择排序
 *
 * 时间复杂度：O(n2)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function selectSort(arr: number[]): number[] {
    // 选择排序
    // 外层为轮数，需要 len - 1 轮
    // 内层, 记录最小索引，交换，从前往后排

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // 交换
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
