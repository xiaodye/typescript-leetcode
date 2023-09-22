/**
 * 这里有 n 个航班，它们分别从 1 到 n 进行编号。
 * 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi]
 * 意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。
 * 请你返回一个长度为 n 的数组 answer，里面的元素是每个航班预定的座位总数。
 * @param bookings
 * @param n
 * @returns
 */
export default function corpFlightBookings(bookings: number[][], n: number): number[] {
    // 构建差分数组, n 个航班，初始座位数数都为 0
    const diff = new Array<number>(n).fill(0);
    const res: number[] = [];

    // 做区间增量
    for (const booking of bookings) {
        diff[booking[0] - 1] += booking[2];

        if (booking[1] < n) {
            diff[booking[1]] -= booking[2];
        }
    }

    // 输出结果数组
    res[0] = diff[0];
    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] + diff[i];
    }

    return res;
}
