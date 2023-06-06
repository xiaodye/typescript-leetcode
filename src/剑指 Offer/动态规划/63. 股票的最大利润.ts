/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 * @param prices
 * @returns
 */
export default function maxProfit(prices: number[]): number {
  // dp[i] 表示 前 i 日的最大利润
  const dp: number[] = [];
  let minPrice = prices[0];

  // 第 0 天最大利润是 0
  dp[0] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return dp[dp.length - 1];
}
