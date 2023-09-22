/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * @param nums
 * @returns
 */
export default function longestConsecutive(nums: number[]): number {
    // 边界分析
    if (nums.length === 0) return 0;

    // 初始化最长长度
    let maxLen = 1;

    // set 去重
    const set = new Set<number>(nums);

    for (let num of set) {
        // 存在前驱，肯定没法匹配到最长的（无效匹配），只有从一个没有前驱的节点开始匹配，才可能得到结果。
        if (set.has(num - 1)) continue;

        let len = 0;

        while (set.has(num)) {
            len++;
            num++;
        }

        maxLen = Math.max(maxLen, len);
    }

    return maxLen;
}
