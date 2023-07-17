/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @param nums
 * @returns
 */
export default function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length;

  let slow = 2;
  let fast = 2;

  // 从第二个元素开始
  while (fast < nums.length) {
    // 重复元素已有两个，跳过
    if (nums[fast] === nums[slow - 2]) {
      fast++;
    } else {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
  }

  return slow;
}
