/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 * 你可以按 任何顺序 返回答案。
 * @param n
 * @param k
 * @returns
 */
export default function combine(n: number, k: number): number[][] {
  const subset: number[] = [];
  const res: number[][] = [];

  // 定义 dfs 函数，入参是当前遍历到的数字
  function dfs(nth: number) {
    if (subset.length === k) {
      res.push([...subset]);
      return;
    }

    for (let i = nth; i <= n; i++) {
      // 情况一: nums[i]在子集
      subset.push(i);

      dfs(i + 1);

      // 情况二: nums[i]不在子集
      subset.pop();
    }
  }

  dfs(1);

  return res;
}
