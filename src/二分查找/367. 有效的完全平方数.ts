/**
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 * @param num
 * @returns
 */
export default function isPerfectSquare(num: number): boolean {
  let l = 1;
  let r = num;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const square = mid * mid;

    if (square > num) {
      r = mid - 1;
    } else if (square < num) {
      l = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}
