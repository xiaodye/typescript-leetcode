/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * @param grid
 * @returns
 */
function numIslands(grid: string[][]): number {
    if (grid.length === 0 || grid[0].length === 0) return 0;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // 初始化岛屿数量，缓存二维数组的行数与列数
    let count = 0;
    const rows = grid.length;
    const columns = grid[0].length;

    function dfs(i: number, j: number): void {
        // 如果试图探索的范围已经越界，则return
        if (i < 0 || j < 0 || i >= rows || j >= columns || grid[i][j] === "0") return;

        grid[i][j] = "0";

        // 遍历完当前的1，继续去寻找下一个1，顺序为下右上左
        for (const [dx, dy] of directions) {
            dfs(i + dx, j + dy);
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                count++;
            }
        }
    }

    return count;
}

export default numIslands;
