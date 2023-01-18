/**
 * 选择排序
 * @param arr 待排序数组
 * @returns
 */
export default function selectSort(arr: number[]): number[] {
  const len = arr.length;

  let minIndex: number;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;

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

// test
const arr = [5, 3, 2, 4, 1];
console.log(selectSort(arr));
debugger;
