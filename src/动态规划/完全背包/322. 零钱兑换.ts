/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * @param coins
 * @param amount
 * @returns
 */
function coinChnage(coins: number[], amount: number): number {
    // 完全背包问题
    // dp[i]: 总额数字 i 对应的最少硬币数
    // 倒推：假设现在已经有了 11 美分，确定有几个硬币
    // 递推式：dp[i] = Math.min(dp[i - amount[0]],dp[i-amount[1]], .....) + 1
    // 初始化 dp, dp[0] = 0;
    const dp = new Array<number>(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

export default coinChnage;
