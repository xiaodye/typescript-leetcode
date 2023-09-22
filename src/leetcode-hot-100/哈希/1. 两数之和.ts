/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * @param nums
 * @param target
 */
export default function towSum(nums: number[], target: number): number[] {
    // 定义一个map，记录之前遍历的值，key: nums[i]; value: i
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (map.has(x)) return [map.get(x), i];
        map.set(nums[i], i);
    }

    return [];
}
