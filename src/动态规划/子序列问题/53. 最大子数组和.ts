/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * @param nums
 * @returns
 */
export default function maxSubArray(nums: number[]): number {
  // dp[i]: 第 i 项结尾最大子数组和
  // 递推式: dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  // 初始化dp: dp[0] = nums[0];

  const dp: number[] = [nums[0]];
  let maxSum = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

    maxSum = Math.max(maxSum, dp[i]);
  }

  return maxSum;
}
