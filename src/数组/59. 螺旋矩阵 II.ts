/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 * 时间复杂度：O(n^2)
 *
 * 空间复杂度：O(n^2)
 *
 * @param n
 * @returns
 */
export default function generateMatrix(n: number): number[][] {
  // 初始化矩阵
  const matrix = new Array<number[]>(n);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array<number>(n).fill(0);
  }

  let num = 1;
  let [left, right, top, bottom] = [0, n - 1, 0, n - 1];

  // loop: 循环次数
  let loop = Math.floor(n / 2);

  // 左闭右开，上右下左
  while (loop-- !== 0) {
    for (let i = left; i < right; i++) {
      matrix[top][i] = num++;
    }

    for (let i = top; i < bottom; i++) {
      matrix[i][right] = num++;
    }

    for (let i = right; i > left; i--) {
      matrix[bottom][i] = num++;
    }

    for (let i = bottom; i > top; i--) {
      matrix[i][left] = num++;
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  // 考虑奇数的情况，最中间还会有一个点未遍历
  if (n % 2 === 1) {
    const center = Math.floor(n / 2);
    matrix[center][center] = n * n;
  }

  return matrix;
}
