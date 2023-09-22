/**
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 * 假设每一种面额的硬币有无限个。
 * 题目数据保证结果符合 32 位带符号整数。
 * @param amount
 * @param coins
 */
function change(amount: number, coins: number[]): number {
    // dp[i] 表示金额之和等于 i 的硬币组合数
    // dp[i] = sum(dp[i- coins[0]], dp[i - coins[1],...])
    // dp[0] = 1; 金额为0 ，就是不放硬币 1种

    const dp = new Array<number>(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                dp[j] += dp[j - coins[i]];
            }
        }
    }

    return dp[amount];
}

export default change;
