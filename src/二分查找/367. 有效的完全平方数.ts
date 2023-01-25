/**
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 * @param num
 * @returns
 */
export default function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (mid < num / mid) {
      left = mid + 1;
    } else if (mid > num / mid) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
}
