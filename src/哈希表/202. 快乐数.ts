/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * @param n
 * @returns
 */
export default function isHappy(n: number): boolean {
  const set = new Set<number>();

  // 两种情况结束循环，n === 1, n出现重复数字（无限循环）
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = getSum(n);
  }

  return n === 1;
}

function getSum(n: number): number {
  let sum = 0;

  while (n !== 0) {
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }

  return sum;
}
