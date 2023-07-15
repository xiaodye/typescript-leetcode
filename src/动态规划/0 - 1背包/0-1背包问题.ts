/**
 * 0-1背包问题
 * 有n件物品和一个最多能背重量为w 的背包。第i件物品的重量是weight[i]，得到的价值是value[i] 。
 * 每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大。
 *
 * @param weight 物品的质量数组
 * @param value 物品的价值数组
 * @param c 背包的容量
 * @returns 背包的最大价值
 */
export default function knapsack(weight: number[], value: number[], c: number): number {
  // dp[i][j]: 前 i 个物品，背包容量为 j 的最大价值

  // 对 物品 i 放还是不放的问题
  // dp[i][j] = Math.max(dp[i - 1][j - w[i]] + v[i], dp[i - 1][j]) (j >= w[i])
  // 初始化dp: 首列（背包容量为空，均为 0 ），首行（当背包容量 >= 第一个物品时，最大价值为第一个物品的价值）

  // 行为背包物品，列为背包容量

  const num = weight.length;

  /**
   * num就是物品的数量
   * 初始化一个二维数组，dp[i][j]: 从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
   */
  const dp = Array.from({ length: num }, () => new Array<number>(c + 1).fill(0));

  // 初始化首行的数据
  for (let i = weight[0]; i <= c; i++) {
    dp[0][i] = value[0];
  }

  // 填充dp数组，此时第首行和第首列已经确立
  for (let i = 1; i < num; i++) {
    for (let j = 1; j <= c; j++) {
      if (j < weight[i]) {
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
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }

  return dp[num - 1][c];
}

// test
console.log(knapsack([1, 3, 4, 5], [15, 20, 30, 55], 6));
debugger;
