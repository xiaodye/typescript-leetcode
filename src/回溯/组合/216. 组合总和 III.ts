/**
 * 找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
 * 只使用数字1到9，每个数字 最多使用一次
 * 返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
 * @param k
 * @param n
 * @returns
 */
export default function combinationSum3(k: number, n: number): number[][] {
  // 回溯-组合问题-原数组没有重复数
  // 1. 没有顺序要求
  // 2. 不能有重复的数
  // 3. 个数有限制
  const res: number[][] = [];
  const combine: number[] = [];

  function backtrack(start: number, sum: number): void {
    // 边界
    if (sum > n) return;
    if (combine.length === k && sum < n) return;
    if (combine.length === k && sum === n) {
      res.push([...combine]);
      return;
    }

    // 剪枝：9 - (k - combine.length) + 1
    for (let i = start; i <= 9 - (k - combine.length) + 1; i++) {
      combine.push(i);
      sum += i;
      backtrack(i + 1, sum);

      // 回溯
      combine.pop();
      sum -= i;
    }
  }

  backtrack(1, 0);

  return res;
}
