/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 *
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
 *
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * 时间复杂度：O(n)
 *
 * 空间复杂度：O(1)
 *
 * @param target
 * @param nums
 * @returns
 */
export default function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = Infinity;
  let sum = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];

    while (sum >= target) {
      const len = j - i + 1;
      minLen = minLen > len ? len : minLen;

      // 收缩滑动窗口，变更i
      sum -= nums[i++];
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
