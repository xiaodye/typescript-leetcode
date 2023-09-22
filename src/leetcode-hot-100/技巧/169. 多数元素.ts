/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * @param nums
 * @returns
 */
export default function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();

    // 遍历数组，记录每个数字出现的次数
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    // 遍历map, 找出count > arr.length/2 的数字
    for (const [num, count] of map) {
        if (count > nums.length / 2) return num;
    }

    return -1;
}
