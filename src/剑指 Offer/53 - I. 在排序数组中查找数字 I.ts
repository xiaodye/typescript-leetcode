/**
 * 统计一个数字在排序数组中出现的次数。
 * @param nums
 * @param target
 * @returns
 */
export default function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let count = 0;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) {
      count++;

      let i = mid - 1;
      while (nums[i--] === target) count++;
      i = mid + 1;
      while (nums[i++] === target) count++;

      break;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return count;
}
