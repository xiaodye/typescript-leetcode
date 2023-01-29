/**
 * 实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。
 *
 * -231 <= n <= 231-1
 *
 * 时间复杂度: O(logn)
 *
 * @param x
 * @param n
 * @returns
 */
export default function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);

  // n 是偶数，使用分治，一分为二，等于 x*x 的 n/2 次方
  // n 是奇数时 x的n次方 = x*x 的 n-1 次方
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x, n - 1);
}
