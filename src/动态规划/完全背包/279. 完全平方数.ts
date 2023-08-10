/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 * @param n
 * @returns
 */
export default function numSquares(n: number): number {
  // dp[i]: 和为 i 的完全平方数的最小数量
  // dp[i] = Math.min(dp[i - 1*1]+1, dp[i - 2*2]+1, ...)
  const dp = new Array<number>(n + 1).fill(Infinity);

  // 初始化 dp ，dp[0] = 0; 0 就是什么都不放
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
}
