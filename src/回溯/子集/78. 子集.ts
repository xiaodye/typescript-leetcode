/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * @param nums
 * @returns
 */
export default function subsets(nums: number[]): number[][] {
  // 子集-组合的一种特殊情况-无重复元素
  // 1. 元素只能使用一次
  // 2. 无顺序要求
  const res: number[][] = [];
  const subset: number[] = [];

  function backstrack(index: number): void {
    // 收集每个叶子节点
    res.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      subset.push(nums[i]);
      backstrack(i + 1);
      subset.pop();
    }
  }

  backstrack(0);

  return res;
}
