/**
 * 归并排序
 * @param arr 待排序数组
 * @returns
 */
export default function mergeSort(arr: number[]): number[] {
  const len = arr.length;

  // 但被分割的数组只有一个元素时，返回数组。
  if (len <= 1) return arr;
  const mid = Math.floor(len / 2);
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid, len));
  arr = mergeArr(leftArr, rightArr);

  return arr;
}

/**
 * 合并两个有序数组
 * @param leftArr
 * @param rightArr
 * @returns
 */
const mergeArr = function (leftArr: number[], rightArr: number[]): number[] {
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
