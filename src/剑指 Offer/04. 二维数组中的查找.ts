/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。
 * 请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * - 时间复杂度：O(nlogm)
 * - 空间复杂度：O(1)
 *
 * @param matrix
 * @param target
 * @returns
 */
export default function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  for (const row of matrix) {
    const index = search(row, target);

    if (index !== -1) {
      return true;
    }
  }

  return false;
}

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
