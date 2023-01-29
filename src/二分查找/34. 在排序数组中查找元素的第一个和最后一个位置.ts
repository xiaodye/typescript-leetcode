/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 *
 * 时间复杂度：O(logn)
 *
 * 空间复杂度：O(1)
 *
 * @param nums
 * @param target
 * @returns
 */
export default function searchRange(nums: number[], target: number): number[] {
  const leftIndex = binarySearch(nums, target - 1);
  const rightIndex = binarySearch(nums, target) - 1;

  if (leftIndex <= rightIndex && nums[leftIndex] === target) {
    return [leftIndex, rightIndex];
  }

  return [-1, -1];
}

/**
 * 二分查找第一个大于 target 的数的下标
 * @param nums
 * @param target
 * @returns
 */
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
