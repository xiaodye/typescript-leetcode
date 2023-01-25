/**
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * @param x
 * @returns
 */
export default function mySqrt(x: number): number {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid <= x / mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
