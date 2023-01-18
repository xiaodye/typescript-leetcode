/**
 * 冒泡排序
 * @param arr 待排序数组
 * @returns
 */
export default function bubbleSort(arr: number[]): number[] {
  const len = arr.length;

  // 外层代表轮数。
  // 一轮排序好一个数，从后往前排。
  // 比如5个数，只需比较4轮，排序好后4个数，还有1个数自然就排好了。
  for (let i = 0; i < len - 1; i++) {
    // 内层循环代表每轮要比较的次数
    // flag作为一个标志位。可以优化冒泡排序，让算法的最好情况时间复杂度达到O(n)
    let flag = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }

    // 若一次交换也没发生，则说明数组有序，直接放过。
    if (!flag) return arr;
  }

  return arr;
}

// test
const arr = [5, 3, 2, 4, 1];
console.log(bubbleSort(arr));
debugger;
