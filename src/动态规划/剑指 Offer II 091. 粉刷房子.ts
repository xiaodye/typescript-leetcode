/**
 * “粉刷房子”问题
 * @param costs
 * @returns
 */
export default function minCost(costs: number[][]): number {
  if (costs.length === 0) return 0;

  // 初始化一个二维数组
  const len = costs.length;
  const f = new Array<number[]>(len);
  for (let i = 0; i < f.length; i++) {
    f[i] = new Array<number>(3);
  }

  // 初始化状态值，边界值
  f[0][0] = costs[0][0];
  f[0][1] = costs[0][1];
  f[0][2] = costs[0][2];

  // 开始更新刷到每一个房子时的状态值
  for (let i = 1; i < len; i++) {
    f[i][0] = Math.min(f[i - 1][1], f[i - 1][2]) + costs[i][0];
    f[i][1] = Math.min(f[i - 1][0], f[i - 1][2]) + costs[i][1];
    f[i][2] = Math.min(f[i - 1][0], f[i - 1][1]) + costs[i][2];
  }

  // 返回刷到最后一个房子时，所有可能出现的总价中的最小值
  return Math.min(f[len - 1][0], f[len - 1][1], f[len - 1][2]);
}

// test
const costs = [
  [17, 2, 17],
  [16, 16, 5],
  [14, 3, 19],
];
console.log(minCost(costs));
