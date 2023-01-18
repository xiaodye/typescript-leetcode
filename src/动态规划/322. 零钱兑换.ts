/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * @param coins
 * @param amount
 * @returns
 */
export default function coinChnage(coins: number[], amount: number): number {
  const f: number[] = [];
  f[0] = 0;

  // i代表硬币总金额，j代表硬币种类数组的索引
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity;

    for (let j = 0; j < coins.length; j++) {
      // 若硬币面额小于目标总额，则问题成立
      if (i - coins[j] >= 0) {
        // 状态转移方程
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
      }
    }
  }

  // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
  if (f[amount] === Infinity) {
    return -1;
  }

  return f[amount];
}

// test
console.log(coinChnage([1, 2, 5], 11));
console.log(coinChnage([2], 3));
debugger;
