/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 * @param x
 * @returns
 */
export default function reverse(x: number): number {
  let res = 0;

  while (x !== 0) {
    const temp = x % 10;
    res = res * 10 + temp;

    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
      return 0;
    }

    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
  }

  return res;
}
