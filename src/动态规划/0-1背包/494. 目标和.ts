/**
 * 给你一个非负整数数组 nums 和一个整数 target 。
 * 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
 * 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1"
 * 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。
 * @param nums
 * @param target
 */
function findTargetSumWays(nums: number[], target: number): number {
    // left组合 + right组合 = sum
    // 需要 left组合 - right组合 = target
    // 推导出 left组合 = (target + sum) / 2， 0 - 1 背包问题
    const sum = nums.reduce((total, curr) => total + curr, 0);

    if (sum < Math.abs(target)) return 0;
    if ((target + sum) % 2 === 1) return 0;

    // x 可以看成是背包容量，需要从 nums 中凑出 x，01背包问题
    // dp[i][j]: 前 i 个物品是否能凑出 j
    const x = (target + sum) / 2;

    const dp = Array.from({ length: nums.length }, () => new Array<number>(x + 1).fill(0));

    // 初始化dp, dp[0][0] = 1, dp[0][nums[0]] = 1;
    dp[0][nums[0]] = 1;
    dp[0][0] = 1;

    if (nums[0] === 0) {
        dp[0][0]++;
    }

    // 第2行和第1列开始
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= x; j++) {
            if (j >= nums[i]) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[nums.length - 1][x];
}

export default findTargetSumWays;
