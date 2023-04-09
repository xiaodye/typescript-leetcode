/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 *
 * 经典解题，哈希
 *
 * @param nums
 * @returns
 */
export default function findDisappearedNumbers(nums: number[]): number[] {
  const res: number[] = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const x = (nums[i] - 1) % n;
    nums[x] += n;
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) {
      res.push(i + 1);
    }
  }

  return res;
}

/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
 * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
 *
 * 双指针法
 *
 * @param nums
 * @returns
 */
export function findDisappearedNumbers2(nums: number[]): number[] {
  const len = nums.length;
  nums = [...new Set(nums)].sort((a, b) => a - b);
  const res: number[] = [];

  let i = 0;
  let j = 1;

  while (j <= len && i < nums.length) {
    if (nums[i] === j) {
      i++;
      j++;
    } else {
      res.push(j);
      j++;
    }
  }

  while (j <= len) {
    res.push(j);
    j++;
  }

  return res;
}

debugger;
