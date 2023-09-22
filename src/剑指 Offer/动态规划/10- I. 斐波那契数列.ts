/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。
 * @param n
 * @returns
 */
export default function fib(n: number): number {
    const dp: number[] = [0, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % (Math.pow(10, 9) + 7);
    }

    return dp[n];
}
