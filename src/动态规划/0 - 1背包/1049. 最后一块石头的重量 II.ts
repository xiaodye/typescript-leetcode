/**
 * 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
 * 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。
 * @param stones
 * @returns
 */
export default function lastStoneWeightII(stones: number[]): number {
  //  可以看成是背包容量
  const sum = stones.reduce((total, curr) => total + curr, 0);
  const n = Math.floor(sum / 2);

  const dp = Array.from({ length: stones.length }, () => new Array<number>(n + 1).fill(0));

  // 初始化 dp，首行
  for (let i = stones[0]; i <= n; i++) {
    dp[0][i] = stones[0];
  }

  for (let i = 1; i < stones.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (j >= stones[i]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return sum - dp[stones.length - 1][n] * 2;
}
