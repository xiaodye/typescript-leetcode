/**
 * 写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。
 * @param str
 * @returns
 */
export default function strToInt(str: string): number {
  str = str.trim();

  if (str.length === 0) return 0;

  // sign: 符号位
  let res = 0;
  let sign = 1;

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (str[0] === "+") {
    str = str.substring(1);
  } else if (str[0] === "-") {
    str = str.substring(1);
    sign = -sign;
  }

  for (const char of str) {
    if (!/[0-9]/.test(char)) break;
    res = res * 10 + Number(char);

    if (res * sign < INT_MIN) return INT_MIN;
    if (res * sign > INT_MAX) return INT_MAX;
  }

  return res * sign;
}
