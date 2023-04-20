/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 * 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 * 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * @param nums
 * @returns
 */
export default function productExceptSelf(nums: number[]): number[] {
  const L: number[] = [];
  const R: number[] = [];
  const answer: number[] = [];

  L[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1];
  }

  R[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = L[i] * R[i];
  }

  return answer;
}
