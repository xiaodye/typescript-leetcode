/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * @param nums
 * @returns
 */
export default function firstMissingPositive(nums: number[]): number {
  const set = new Set<number>();
  let max = -Infinity;
  let res = 0;

  // 用 set 存储所有正整数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && !set.has(nums[i])) {
      set.add(nums[i]);
      max = Math.max(max, nums[i]);
    }
  }

  // 如果 set.size === 0 说明数组没有正整数，返回 1
  if (set.size === 0) return 1;

  // 枚举，查找哪个数没有出现过
  for (let i = 1; i <= max + 1; i++) {
    if (!set.has(i)) {
      res = i;
      break;
    }
  }

  return res;
}
