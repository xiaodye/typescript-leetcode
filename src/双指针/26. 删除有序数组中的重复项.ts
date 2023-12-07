/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，
 * 使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 然后返回 nums 中唯一元素的个数。
 * @param nums
 * @returns
 */
function removeDuplicates(nums: number[]): number {
    // 思路：
    // 数组有序，相同元素一定会相同
    // 采用双指针之快慢指针

    if (nums.length <= 1) return nums.length;

    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (j > 0 && nums[j] === nums[j - 1]) {
            j++;
            continue;
        }

        nums[i] = nums[j];
        i++;
        j++;
    }

    // 最终 i 对应的位置最后元素的索引位置 + 1, 即数组长度
    return i;
}

export default removeDuplicates;
