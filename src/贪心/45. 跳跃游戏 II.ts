/**
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
 * 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
 * - 0 <= j <= nums[i]
 * - i + j < n
 * 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
 * @param nums
 * @returns
 */
export default function jump(nums: number[]): number {
  // 步数
  let steps = 0;

  // end：下一次可达距离，maxPos：用于遍历中，记录最大可达距离
  let end = 0;
  let maxPos = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 当i + nums[i] >= len - 1，说明可以达到最后了，退出循环
    if (i + nums[i] >= nums.length - 1) {
      steps++;
      break;
    }

    maxPos = Math.max(maxPos, i + nums[i]);

    if (i === end) {
      end = maxPos;
      steps++;
    }
  }

  return steps;
}
