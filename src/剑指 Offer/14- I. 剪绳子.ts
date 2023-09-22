/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * @param n
 * @returns
 */
export default function cuttingRope(n: number): number {
    const dp = new Array<number>(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            // dp[i] 表示将长度为 i 的绳子剪成至少两段绳子之后，这些绳子长度的最大乘积
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
}
