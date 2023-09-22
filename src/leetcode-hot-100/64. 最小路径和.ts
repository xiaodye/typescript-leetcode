/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 * @param grid
 * @returns
 */
export default function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    for (let i = 1; i < n; i++) {
        grid[0][i] += grid[0][i - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
        }
    }

    return grid[m - 1][n - 1];
}
