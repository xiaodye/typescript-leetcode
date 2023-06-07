/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 * @param grid
 * @returns
 */
export default function maxValue(grid: number[][]): number {
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = Array.from({ length: rows }, () => new Array<number>(columns).fill(0));

  // 初始化第一个元素
  dp[0][0] = grid[0][0];

  // 初始化每列
  for (let i = 1; i < columns; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  // 初始化每列
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[rows - 1][columns - 1];
}
