/**
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。
 * 请你从 nums 中找出并返回总和为 target 的元素组合的个数。
 * 题目数据保证答案符合 32 位整数范围。
 * @param nums
 * @param target
 * @returns
 */
export default function combinationSum4(nums: number[], target: number): number {
    // dp[i]: 凑成目标数 i 的排列组合数
    // dp[i] = sum(dp[i - nums[0]], dp[i- nums[1]],...)
    // dp[0] = 1; 凑成 0 的排列组合数有一种，就是什么都不放
    const dp = new Array<number>(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }

    return dp[target];
}
