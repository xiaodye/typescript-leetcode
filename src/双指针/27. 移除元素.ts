/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * @param nums
 * @param val
 * @returns
 */
function removeElement(nums: number[], val: number): number {
    // 思路：快慢指针

    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if (nums[j] === val) {
            j++;
            continue;
        }

        nums[i] = nums[j];
        i++;
        j++;
    }

    return i;
}

export default removeElement;
