/**
 * 0-1背包问题
 * @param w 物品的质量数组
 * @param v 物品的价值数组
 * @param c 背包的容量
 * @returns 背包的最大价值
 */
export default function knapsack(w: number[], v: number[], c: number): number {
  /**
   * num就是物品的数量
   * 初始化一个二维数组，dp[i][j]表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
   */
  const num = w.length;
  const dp = new Array<number[]>(num);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(c + 1).fill(0);
  }

  // 初始化首行的数据
  for (let i = w[0]; i <= c; i++) {
    dp[0][i] = v[0];
  }

  // 填充dp数组，此时第首行和第首列已经确立
  for (let i = 1; i < num; i++) {
    for (let j = 1; j <= c; j++) {
      if (j < w[i]) {
        /**
         * 当前背包的容量都没有当前物品i大的时候，是不放物品i的
         * 那么前i-1个物品能放下的最大价值就是当前情况的最大价值
         */
        dp[i][j] = dp[i - 1][j];
      } else {
        /**
         * 当前背包的容量可以放下物品i
         * 那么此时分两种情况：
         *    1.不放物品i
         *    2.放物品i
         * 比较这两种情况下，哪种背包中物品的最大价值最大
         */
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
      }
    }
  }

  return dp[num - 1][c];
}

// test
console.log(knapsack([1, 3, 4, 5], [15, 20, 30, 55], 6));
debugger;
