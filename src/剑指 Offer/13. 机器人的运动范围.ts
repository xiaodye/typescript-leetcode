/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * @param m
 * @param n
 * @param k
 * @returns
 */
export default function movingCount(m: number, n: number, k: number): number {
  let count = 0;
  const visted = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(i: number, j: number): void {
    count++;
    visted[i][j] = true;

    for (const [dx, dy] of direction) {
      const newi = i + dx;
      const newj = j + dy;

      if (
        newi >= 0 &&
        newi < m &&
        newj >= 0 &&
        newj < n &&
        getDigitsSum(newi) + getDigitsSum(newj) <= k &&
        !visted[newi][newj]
      ) {
        dfs(newi, newj);
      }
    }
  }

  dfs(0, 0);

  return count;
}

function getDigitsSum(num: number): number {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
