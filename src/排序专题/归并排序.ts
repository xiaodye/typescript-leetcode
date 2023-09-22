/**
 * 归并排序
 *
 * 时间复杂度：O(nlogn)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function mergeSort(arr: number[]): number[] {
    const len = arr.length;

    // 但被分割的数组小于一个元素时，返回数组。
    if (len <= 1) return arr;
    const mid = Math.floor(len / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid, len));

    return merge(leftArr, rightArr);
}

/**
 * 合并两个有序数组，不需要额外空间：双指针
 * @param arr1
 * @param arr2
 * @returns
 */
function merge(arr1: number[], arr2: number[]): number[] {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = arr1.length + arr2.length - 1;

    while (i >= 0 && j >= 0) {
        if (arr1[i] >= arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }

        k--;
    }

    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }

    return arr1;
}

/**
 * 合并两个有序数组，需额外空间
 * @param leftArr
 * @param rightArr
 * @returns
 */
const merge2 = function (leftArr: number[], rightArr: number[]): number[] {
    // 初始化两个指针，分别指向 arr1 和 arr2
    let i = 0;
    let j = 0;
    const res: number[] = [];

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            res.push(leftArr[i]);
            i++;
        } else {
            res.push(rightArr[j]);
            j++;
        }
    }

    // 若其中一个子数组会首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i < leftArr.length) {
        return [...res, ...leftArr.slice(i)];
    } else {
        return [...res, ...rightArr.slice(j)];
    }
};

// test
const arr = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(mergeSort(arr));
debugger;
