/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * @param nums
 * @returns
 */
function sortedSquares(nums: number[]): number[] {
    const res: number[] = [];

    // 定义双指针
    let i = 0;
    let j = nums.length - 1;

    // k 指向数组的末尾，从后往前填充
    let k = j;

    while (i <= j) {
        if (nums[i] * nums[i] >= nums[j] * nums[j]) {
            res[k] = nums[i] * nums[i];
            i++;
        } else {
            res[k] = nums[j] * nums[j];
            j--;
        }

        k--;
    }

    return res;
}

export default sortedSquares;
