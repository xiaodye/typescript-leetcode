/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * @param nums
 * @returns
 */
export default function exchange(nums: number[]): number[] {
  if (nums.length === 0) return nums;

  const res: number[] = [];
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      res[left++] = nums[i];
    } else {
      res[right--] = nums[i];
    }
  }

  return res;
}
