/**
 * 从若干副扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
 * @param nums
 * @returns
 */
export default function isStraight(nums: number[]): boolean {
    // key: 数字, 出现的次数不能超过0
    const map = new Set<number>();

    // 记录5张牌的最大和最小值
    let max = 0;
    let min = 14;

    // 遍历数组，记录每个数字出现的次数（除了0）
    for (const num of nums) {
        if (num === 0) continue;

        max = Math.max(max, num);
        min = Math.min(min, num);

        // 若发现有重复的，提前返回false
        if (map.has(num)) return false;
        map.add(num);
    }

    return max - min < 5;
}
