/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * @param nums
 * @returns
 */
export default function firstMissingPositive(nums: number[]): number {
  // 哈希法
  // 对于长度为 n 的数组，第一个未出现的整数只会在 [1, n+1]
  // 1. 将数组中负数改为 n+1
  // 2. 遍历数组中的每一个数 x, 将数组中下标为 x-1 改为 负数
  // 3. 如果数组中每一个数都是负数，返回 n + 1，否则返回第一个 正数

  const len = nums.length;

  // 第一次遍历
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = len + 1;
    }
  }

  // 第二次遍历
  for (let i = 0; i < len; i++) {
    const x = Math.abs(nums[i]);

    if (nums[x - 1] > 0) {
      nums[x - 1] = -nums[x - 1];
    }
  }

  // 第三次遍历
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return len + 1;
}

export function firstMissingPositive2(nums: number[]): number {
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
