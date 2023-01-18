/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param n 楼梯阶数
 * @returns
 */
export default function climbStairs(n: number): number {
  const f: number[] = [];

  // 初始化已知值
  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
}

// test
console.log(climbStairs(5));
debugger;
