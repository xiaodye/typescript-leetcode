/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * @param nums
 * @returns
 */
export default function lengthOfLIS(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  // dp[i]: 下标 i 结尾的最长递增子序列
  // 递推式：dp[i] = Math.max(dp[0], dp[1], dp[2], ....) + 1 (nums[j] < nums[i]; j < i)
  // 初始化dp: 每项初始值均为 1
  const dp = new Array<number>(nums.length).fill(1);

  // 用于记录最大值
  let maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}
