/**
 * 选择排序
 *
 * 时间复杂度：O(n2)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function selectSort(arr: number[]): number[] {
    const len = arr.length;

    // 外层为轮数，每一轮，排好一个数
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // i是待排序区间的左边界，j是有边界
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}
