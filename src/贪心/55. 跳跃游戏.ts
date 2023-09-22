/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * @param nums
 * @returns
 */
export default function canJump(nums: number[]): boolean {
    // 初始化最大可达位置，初始化为 0，代表 i = 0 是可达的
    let maxJump = 0;

    for (let i = 0; i < nums.length; i++) {
        // 下一个位置不可达，返回 false
        if (i > maxJump) return false;

        maxJump = Math.max(maxJump, i + nums[i]);

        // 若当前maxJump > len - 1，说明已经可达，提前结束
        if (maxJump >= nums.length - 1) return true;
    }

    return false;
}
