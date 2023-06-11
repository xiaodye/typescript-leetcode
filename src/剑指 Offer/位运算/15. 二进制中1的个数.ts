/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 * @param n
 * @returns
 */
export default function hammingWeight(n: number): number {
  let res = 0;

  while (n !== 0) {
    // 每次反转最低位的1，最终变成0
    n &= n - 1;
    res++;
  }

  return res;
}
