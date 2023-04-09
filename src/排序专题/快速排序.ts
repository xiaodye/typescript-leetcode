/**
 * 快速排序
 *
 * 时间复杂度：O(nlogn)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  // 从数组中取出我们的"基准"元素
  const pivot = arr.splice(pivotIndex, 1)[0];
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // 至此，我们将数组分成了left和right两个部分，中间的一个元素pivot之前被删了，现在要加回来
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

/**
 * 快速排序（原地排序）
 * @param arr 待排序数组
 * @param left
 * @param right
 * @returns
 */
export function quickSort2(arr: number[], left: number, right: number): number[] {
  if (arr.length > 1) {
    const pivotIndex = partition(arr, left, right);

    if (left < pivotIndex - 1) {
      quickSort2(arr, left, pivotIndex - 1);
    }
    if (right > pivotIndex) {
      quickSort2(arr, pivotIndex, right);
    }
  }
  return arr;
}

/**
 * 以基准值为轴心，划分左右子数组的过程
 * @param arr 待划分数组
 * @param l
 * @param r
 * @returns
 */
const partition = function (arr: number[], l: number, r: number): number {
  let pivot = arr[Math.floor(l + (r - l) / 2)];

  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }

    // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }

  // 返回左指针索引作为下一次划分左右子数组的依据
  return l;
};

// test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
debugger;
