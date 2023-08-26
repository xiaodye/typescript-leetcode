/**
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 必须 原地 修改，只允许使用额外常数空间。
 * @param nums
 * @returns
 */
export default function nextPermutation(nums: number[]): void {
  if (nums.length === 1) return;

  const len = nums.length;

  let [i, j, k] = [len - 2, len - 1, len - 1];

  // 1. 从后向前 查找第一个 相邻升序 的元素对 (i,j)，满足 A[i] < A[j]。此时 [j,end) 必然是降序
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  // 如果在步骤 1 找不到符合的相邻元素对，说明当前 [begin,end) 为一个降序顺序，则直接跳到步骤 4
  if (i >= 0) {
    // 2. 在 [j,end) 从后向前 查找第一个满足 A[i] < A[k] 的 k
    while (nums[i] >= nums[k]) {
      k--;
    }

    // 3. 将 A[i] 与 A[k] 交换
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }

  let [l, r] = [j, len - 1];

  // 4. 可以断定这时 [j,end) 必然是降序，逆置 [j,end)，使其升序
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}
