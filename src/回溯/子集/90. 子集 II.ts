/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * @param nums
 * @returns
 */
export default function subsetsWithDup(nums: number[]): number[][] {
  // 回溯-子集问题-原数组有重复元素
  // 1. 没有顺序要求
  // 2. 每个元素只能使用一次

  const res: number[][] = [];
  const subset: number[] = [];
  const used: boolean[] = [];

  function backstrack(index: number): void {
    res.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      // 去重
      if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;

      subset.push(nums[i]);
      used[i] = true;
      // 递归
      backstrack(i + 1);

      // 回溯
      subset.pop();
      used[i] = false;
    }
  }

  // 需要排个序
  nums.sort((a, b) => a - b);
  backstrack(0);

  return res;
}
