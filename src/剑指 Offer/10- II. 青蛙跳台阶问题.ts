/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * @param n
 * @returns
 */
export default function numWays(n: number): number {
    const dp: number[] = [1, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % (Math.pow(10, 9) + 7);
    }

    return dp[n];
}
