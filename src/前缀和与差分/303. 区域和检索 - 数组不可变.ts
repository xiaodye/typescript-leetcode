/**
 * 给定一个整数数组  nums，处理以下类型的多个查询:
 * 1. 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
 * 实现 NumArray 类：
 * - NumArray(int[] nums) 使用数组 nums 初始化对象
 * - int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，
 * 包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )
 */
export default class NumArray {
  private prefixSum: number[] = [];

  constructor(nums: number[]) {
    this.prefixSum[0] = 0;

    // prefixSum[i] 表示前 i 项的和，比如 prefixSum[1] === 前  1 项的和 === nums[0]
    for (let i = 0; i < nums.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right + 1] - this.prefixSum[left];
  }
}
