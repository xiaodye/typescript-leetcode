/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * @param grid
 * @returns
 */
export default function numIslands(grid: string[][]): number {
  const moveX = [0, 1, 0, -1];
  const moveY = [1, 0, -1, 0];

  if (grid.length === 0 || grid[0].length === 0) return 0;

  // 初始化岛屿数量，缓存二维数组的行数与列数
  let count = 0;
  const row = grid.length;
  const column = grid[0].length;

  const dfs = function (i: number, j: number) {
    // 如果试图探索的范围已经越界，则return
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === "0") return;

    grid[i][j] = "0";

    // 遍历完当前的1，继续去寻找下一个1，顺序为下右上左
    for (let k = 0; k < 4; k++) {
      dfs(i + moveX[k], j + moveY[k]);
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}

// test
const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
];
console.log(numIslands(grid));
debugger;
