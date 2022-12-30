/**
 * 选择排序
 * @param arr 待排序数组
 * @returns
 */
const selectSort = function (arr: number[]): number[] {
  const len = arr.length;

  let minIndex: number;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
