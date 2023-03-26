/**
 * 希尔排序
 *
 * 时间复杂度：O(nlogn) ~ O(n2)
 *
 * @param arr
 * @returns
 */
export default function shellSort(arr: number[]): number[] {
  const len = arr.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i;
      const temp = arr[i];

      while (j >= gap && arr[j - gap] > arr[j]) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

// test
const arr = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(shellSort(arr));
console.log(1);

debugger;
