/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 * 要求时间复杂度为O(n)。
 * @param nums
 * @returns
 */
export default function maxSubArray(nums: number[]): number {
    const dp: number[] = [];
    dp[0] = nums[0];
    let maxSum = dp[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

        maxSum = dp[i] > maxSum ? dp[i] : maxSum;
    }

    return maxSum;
}
