/**
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * @param nums
 * @returns
 */
function canPartition(nums: number[]): boolean {
    // 数组长度小于2，不成立
    if (nums.length < 2) return false;

    const target = nums.reduce((prev, curr) => prev + curr) / 2;

    // 1. sum / 2 不为整数，不成立
    // 2. maxNum > taget，不成立
    if (target % 1 !== 0) return false;
    if (Math.max(...nums) > target) return false;

    // 初始化 dp:
    const dp = Array.from({ length: nums.length }, () => new Array<boolean>(target + 1).fill(false));

    // 初始化首行，首列全为false，不需要再初始化
    dp[0][nums[0]] = true;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            if (nums[i] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
            }
        }
    }

    return dp[nums.length - 1][target];
}

export default canPartition;
