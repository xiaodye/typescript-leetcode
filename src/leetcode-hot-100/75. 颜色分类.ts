/**
 * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 必须在不使用库内置的 sort 函数的情况下解决这个问题。
 * @param nums
 */
export default function sortColors(nums: number[]): void {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      j++;
    }
  }

  j = i;

  while (j < nums.length) {
    if (nums[j] === 1) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      j++;
    }
  }
}
