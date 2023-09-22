/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
 * @param nums
 * @returns
 */
function rob(nums: number[]): number {
    // 数组成环了，那么首尾元素一定不能同时存在，可以分为两种情况处理，这样就和打家劫舍I 一样了
    // 1. 考虑首元素，不考虑尾元素
    // 2. 考虑尾元素，不考虑首元素

    if (nums.length === 1) return nums[0];

    const len = nums.length;

    const cost1 = robRange(nums, 0, len - 2);
    const cost2 = robRange(nums, 1, len - 1);

    return Math.max(cost1, cost2);
}

function robRange(nums: number[], l: number, r: number): number {
    const dp = new Array<number>(nums.length).fill(0);
    // dp 初始化
    dp[l] = nums[l];
    dp[l + 1] = Math.max(nums[l], nums[l + 1]);

    for (let i = l + 2; i <= r; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[r];
}

export default rob;
