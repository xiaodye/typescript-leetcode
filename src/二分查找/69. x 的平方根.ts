/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * @param x
 * @returns
 */
function mySqrt(x: number): number {
    // 解题思路：就是在 0 ～ x 中找一个数 n, 保证 n * n <= x

    // 处理特殊情况：x === 0
    if (x === 0) return 0;

    let l = 0;
    let r = x;

    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);

        if (mid <= x / mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return r;
}

export default mySqrt;
