/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * @param nums
 */
export default function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    const len = nums.length;

    // 先给数组排个序，这样才能用双指针
    nums.sort((a, b) => a - b);

    // 思路：就是先固定一位，在后面进行匹配
    for (let i = 0; i < len - 2; i++) {
        // 这个最小的数都大于 0 ，后面就不用匹配了
        if (nums[i] > 0) break;

        let j = i + 1;
        let k = len - 1;

        // 要保证 i,j,k 不相同也要保证nums[i], nums[j], nums[k] 也不相等
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (j < k) {
            const total = nums[i] + nums[j] + nums[k];

            if (total < 0) {
                j++;
                while (j < k && nums[j] === nums[j - 1]) j++;
            } else if (total > 0) {
                k--;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;

                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }

    return res;
}
