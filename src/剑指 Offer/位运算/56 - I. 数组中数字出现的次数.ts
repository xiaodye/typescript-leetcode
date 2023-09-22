/**
 * 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。
 * 要求时间复杂度是O(n)，空间复杂度是O(1)。
 * @param nums
 * @returns
 */
export default function singleNumbers(nums: number[]): number[] {
    // x, y 分别为两个不相同的数字
    let [x, y] = [0, 0];

    // n 用于存储 x 异或 y，m 用于记录 x 和 y 中第一个不同的位
    let [n, m] = [0, 1];

    for (let i = 0; i < nums.length; i++) {
        n ^= nums[i];
    }

    // 循环左移，计算 m
    while ((n & m) === 0) {
        m <<= 1;
    }

    // 遍历 nums 分组, 获取 x 和 y
    for (let i = 0; i < nums.length; i++) {
        if ((m & nums[i]) === 0) {
            x ^= nums[i];
        } else {
            y ^= nums[i];
        }
    }

    return [x, y];
}
