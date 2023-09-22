/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * @param nums
 * @returns
 */
function lengthOfLIS(nums: number[]): number {
    // dp: 以 nums[i] 结尾的最长递增子序列
    // dp[i] = Math.max(dp[0], dp[1], ...) + 1; (nums[i] > nums[j]);
    // 初始化 dp, 开始每个元素均为 1
    // 遍历，从 1 开始遍历

    if (nums.length <= 1) return nums.length;

    // dp[i]: 下标 i 结尾的最长递增子序列
    // 递推式：dp[i] = Math.max(dp[0], dp[1], dp[2], ....) + 1 (nums[j] < nums[i]; j < i)
    // 初始化dp: 每项初始值均为 1
    const dp = new Array<number>(nums.length).fill(1);

    // 用于记录最大值
    let maxLen = 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        maxLen = Math.max(maxLen, dp[i]);
    }

    return maxLen;
}

export default lengthOfLIS;
