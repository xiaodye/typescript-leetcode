/**
 * 希尔排序
 *
 * 时间复杂度：O(nlogn) ~ O(n2)
 *
 * @param arr
 * @returns
 */
export default function shellSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      const temp = arr[i];

      while (j - gap >= 0 && arr[j - gap] > arr[j]) {
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
