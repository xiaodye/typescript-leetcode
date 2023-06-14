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

  // 取中间元素作为基准元素
  const pivotIndex = Math.floor(arr.length / 2);

  // 从数组中取出我们的"基准"元素，splice太耗时，故不使用
  // const pivot = arr.splice(pivotIndex, 1)[0];
  const pivot = arr[pivotIndex];
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;

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
export function quickSort2(arr: number[], l: number = 0, r: number = arr.length - 1): number[] {
  // 数组元素小于等于 1 ，直接 return
  if (r - l < 1) return arr;

  const pivotIndex = partition(arr, l, r);

  quickSort2(arr, l, pivotIndex - 1);
  quickSort2(arr, pivotIndex + 1, r);

  return arr;
}

/**
 * 以基准值为轴心，划分左右子数组的过程
 * @param arr 待划分数组
 * @param l
 * @param r
 * @returns
 */
function partition(arr: number[], l: number, r: number): number {
  // 选取最后一个元素为基准元素
  const pivot = arr[r];

  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, r);

  return i + 1;
}

/**
 * 交换两个元素
 * @param arr
 * @param i
 * @param j
 */
function swap(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
debugger;
