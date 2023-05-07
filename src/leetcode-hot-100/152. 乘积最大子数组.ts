/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 测试用例的答案是一个 32-位 整数。
 * 子数组 是数组的连续子序列。
 * @param nums
 * @returns
 */
export default function maxProduct(nums: number[]): number {
  const maxF: number[] = [];
  const minF: number[] = [];
  let res = nums[0];

  // 初识化 dp
  maxF[0] = nums[0];
  minF[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    minF[i] = Math.min(minF[i - 1] * nums[i], maxF[i - 1] * nums[i], nums[i]);
    maxF[i] = Math.max(minF[i - 1] * nums[i], maxF[i - 1] * nums[i], nums[i]);

    if (maxF[i] > res) {
      res = maxF[i];
    }
  }

  return res;
}
