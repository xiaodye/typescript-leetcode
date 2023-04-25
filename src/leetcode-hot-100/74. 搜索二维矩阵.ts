/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * @param matrix
 * @param target
 * @returns
 */
export default function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    if (target > matrix[i][n - 1]) {
      continue;
    }

    let l = 0;
    let r = n - 1;

    while (l <= r) {
      const mid = Math.floor(l + (r - l) / 2);
      if (matrix[i][mid] > target) {
        r = mid - 1;
      } else if (matrix[i][mid] < target) {
        l = mid + 1;
      } else {
        return true;
      }
    }
  }

  return false;
}
