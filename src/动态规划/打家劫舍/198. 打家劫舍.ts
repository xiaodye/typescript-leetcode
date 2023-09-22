/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * @param nums
 * @returns
 */
export default function rob(nums: number[]): number {
    // dp[i]: 前 i 个房屋最多可以偷窃的金额
    // 帮助理解的重要点：盗窃的房屋一定是间隔的（间隔为 1）
    // 所以说，其实就只有两种情况，要么从 0 开始，要么从 1 开始
    const dp: number[] = [];

    // dp 初始化
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
}
