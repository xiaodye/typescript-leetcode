/**
 * 0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
 * 求出这个圆圈里剩下的最后一个数字。
 * @param n
 * @param m
 */
export default function lastRemaining(n: number, m: number): number {
    // 最终活下来那个人的初始位置
    let pos = 0;

    for (let i = 2; i <= n; i++) {
        // 每次循环右移
        pos = (pos + m) % i;
    }

    return pos;
}
