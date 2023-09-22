/**
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
 * 如果有多对数字的和等于s，则输出任意一对即可。
 * @param nums
 * @param target
 * @returns
 */
export default function twoSum(nums: number[], target: number): number[] {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            return [nums[i], nums[j]];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }

    return [];
}
