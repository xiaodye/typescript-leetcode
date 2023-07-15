/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * @param nums
 * @returns
 */
export default function subsets(nums: number[]): number[][] {
  const len = nums.length;
  const subset: number[] = [];
  const res: number[][] = [];

  // 定义 backtrack 函数，start: 开始位置
  function backtrack(start: number) {
    // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
    res.push([...subset]);

    for (let i = start; i < len; i++) {
      // 情况一: nums[i]在子集
      subset.push(nums[i]);

      backtrack(i + 1);

      // 情况二: nums[i]不在子集
      subset.pop();
    }
  }

  backtrack(0);

  return res;
}
