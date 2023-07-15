/**
 * 快速排序
 *
 * 时间复杂度：O(nlogn)
 *
 * @param arr 待排序数组
 * @returns
 */
export default function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // 把第一个元素作为基准元素
  const pivot = arr[0];

  const leftArr: number[] = [];
  const rightArr: number[] = [];

  // 对元素进行分堆，小于基准的放左边，大于的放右边
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // 以此递归
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
  // 数组元素小于 1 ，直接 return
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
console.log(quickSort2(arr));
debugger;
