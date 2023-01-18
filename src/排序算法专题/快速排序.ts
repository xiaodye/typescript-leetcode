/**
 * 快速排序
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

// test
const arr = [98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121];
console.log(quickSort(arr));
debugger;
