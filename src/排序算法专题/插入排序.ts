/**
 * 直接插入排序
 * @param arr 待排序数组
 * @returns
 */
export default function insertSort(arr: number[]): number[] {
  const len = arr.length;
  let temp: number;

  /**
   * 外层循环代表要进行的轮数，每轮可以排序好一个数。
   * i用于标识每次被插入的元素的索引，temp用来保存当前需要插入的元素。
   * j用于定位要插入的位置。
   */
  for (let i = 1; i < len; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      // 这个赋值操作相当于索引为j-1的元素往后挪，不用担心arr[j]，它已经提前被保存到了temp
      arr[j] = arr[j - 1];
      j--;
    }

    // 循环让位，最后得到的 j 就是 temp 的正确索引
    arr[j] = temp;
  }

  return arr;
}

// test
const arr = [5, 3, 2, 4, 1];
console.log(insertSort(arr));
debugger;
