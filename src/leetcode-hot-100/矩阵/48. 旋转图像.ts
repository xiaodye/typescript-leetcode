/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * @param matrix
 */
export default function rotate(matrix: number[][]): void {
  // 主要看下标怎么变，[i][j] = [j][len - 1 - i]
  // 直接换会导致有些数据会被替换，需要创建新数组
  const len = matrix.length;
  const newMatrix = Array.from({ length: len }, () => new Array<number>(len).fill(0));

  // 把新的数组复制到 newMatrix
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      newMatrix[j][len - 1 - i] = matrix[i][j];
    }
  }

  // 更新数组
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = newMatrix[i][j];
    }
  }
}
