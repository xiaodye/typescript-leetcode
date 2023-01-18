/**
 * 三数之和，你返回所有和为 0 且不重复的三元组。注意：答案中不可以包含重复的三元组。
 * @param nums
 * @returns
 */
export default function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];

  // 先给数组排序，数组有序才能用双指针
  nums.sort((a, b) => a - b);

  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < nums.length - 2; i++) {
    // 数组排过序，如果第一个数大于0直接返回res
    if (nums[i] > 0) return res;

    // 左指针left, 右指针right
    let left = i + 1;
    let right = nums.length - 1;

    // 如果遇到重复的数字，则跳过，i = 0 的时候，前面没有元素
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total < 0) {
        // 三数之和小于0，左指针前进
        left++;

        // 处理左指针元素重复的情况
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (total > 0) {
        // 三数之和大于0，右指针后退
        right--;

        // 处理右指针元素重复的情况
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else {
        res.push([nums[i], nums[left], nums[right]]);

        // 左右指针一起前进
        left++;
        right--;

        // 若左或右指针元素重复，跳过
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return res;
}
