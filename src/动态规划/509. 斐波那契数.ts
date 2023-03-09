/**
 * 给定 n ，请计算 F(n) 。
 * @param n
 * @returns
 */
export default function fib(n: number): number {
  if (n === 0 || n === 1) return n;

  const dp: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
