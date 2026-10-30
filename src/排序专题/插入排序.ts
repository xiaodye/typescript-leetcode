/**
 * 直接插入排序
 *
 * 时间复杂度：O(n2)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function insertSort(arr: number[]): number[] {
    // 插入排序
    // 把第一个元素当做已经排好序的元素
    // 当前 arr[i] 表示为需要插入的元素
    // 前面一段为排好的元素，后面的元素依次和前面元素比较，找到正确的位置插入

    for (let i = 1; i < arr.length; i++) {
        // 需要插入的元素
        const curr = arr[i];
        // 前一个元素
        let j = i - 1;

        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        // 此时 arr[j] <= curr; 需要插入到前面
        // 或者 j === -1：curr 比所有已排序元素都小，插到 arr[0]
        arr[j + 1] = curr;
    }

    return arr;
}
