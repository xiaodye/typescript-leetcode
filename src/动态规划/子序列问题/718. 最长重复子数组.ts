/**
 * 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
 * @param nums1
 * @param nums2
 * @returns
 */
function findLength(nums1: number[], nums2: number[]): number {
    const len1 = nums1.length;
    const len2 = nums2.length;

    // dp[i][j] 以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]。
    // 为何要 i - 1 和 j - 1？ 方便初始化
    // dp 初始化 dp[0][0] 是无意义的，只对初始化有用 dp[1][1] = dp[0][0] + 1;
    // 首行和首列均为 0

    const dp = Array.from({ length: len1 + 1 }, () => new Array<number>(len2 + 1).fill(0));
    let maxLen = 0;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 尾部两个字母不相等，则为 0
            if (nums1[i - 1] !== nums2[j - 1]) continue;

            dp[i][j] = dp[i - 1][j - 1] + 1;

            maxLen = Math.max(maxLen, dp[i][j]);
        }
    }

    return maxLen;
}

export default findLength;
