/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * @param target
 * @param nums
 * @returns
 */
function minSubArrayLen(target: number, nums: number[]): number {
    // 1. 定义两个指针，均从 0 开始
    // 2. 当窗口内的和小于 target, 扩大窗口, j++
    // 3. 当窗口内的和大于 target, 开始缩小窗口, i++

    let i = 0;
    let j = 0;
    let sum = 0;
    let minLen = Infinity;

    while (j < nums.length) {
        sum += nums[j];

        // 到达临界值
        while (sum >= target) {
            const len = j - i + 1;
            minLen = Math.min(minLen, len);

            // 收缩窗口
            sum -= nums[i];
            i++;
        }

        // 扩大窗口
        j++;
    }

    return minLen === Infinity ? 0 : minLen;
}

export default minSubArrayLen;
