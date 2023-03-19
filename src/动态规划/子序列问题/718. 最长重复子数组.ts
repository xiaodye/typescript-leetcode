/**
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 * @param nums1
 * @param nums2
 * @returns
 */
export default function findLength(nums1: number[], nums2: number[]): number {
  // 初始化dp数组
  const dp = new Array<number[]>(nums1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<number>(nums2.length + 1).fill(0);
  }

  let maxLen = 0;

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
        }
      }
    }
  }

  return maxLen;
}
