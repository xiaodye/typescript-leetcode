/**
 * 快速排序
 * @param arr 待排序数组
 * @param left
 * @param right
 * @returns
 */
export default function quickSort(arr: number[], left: number, right: number): number[] {
  if (arr.length > 1) {
    const pivotIndex = partition(arr, left, right);

    if (left < pivotIndex - 1) {
      quickSort(arr, left, pivotIndex - 1);
    }
    if (right > pivotIndex) {
      quickSort(arr, pivotIndex, right);
    }
  }
  return arr;
}

/**
 * 以基准值为轴心，划分左右子数组的过程
 * @param arr 待划分数组
 * @param left
 * @param right
 * @returns
 */
const partition = function (arr: number[], left: number, right: number): number {
  let pivot = arr[Math.floor(left + (right - left) / 2)];

  // 初始化左右指针
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  // 返回左指针索引作为下一次划分左右子数组的依据
  return i;
};

// test
const arr = [5, 1, 3, 6, 2, 0, 7];
console.log(quickSort(arr, 0, arr.length - 1));
debugger;
