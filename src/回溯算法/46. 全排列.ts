/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param nums
 * @returns
 */
export default function permute(nums: number[]): number[][] {
  // curr当前排列组合, visted用于记录之前已经遍历的元素
  const len = nums.length;
  const curr: number[] = [];
  const res: number[][] = [];
  const visted = new Set<number>();

  function dfs(nth: number) {
    // 递归边界
    if (nth === len) {
      // 深克隆一个curr, push into res
      res.push([...curr]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (visted.has(nums[i])) continue;

      // 添加进curr, 并在visted做个记录
      curr.push(nums[i]);
      visted.add(nums[i]);

      dfs(nth + 1);

      // 移除记录
      curr.pop();
      visted.delete(nums[i]);
    }
  }

  dfs(0);

  return res;
}
