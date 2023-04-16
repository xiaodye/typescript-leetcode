/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * @param nums
 * @returns
 */
export default function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  const subset: number[] = [];
  const used: boolean[] = [];

  function backtrack(startIndex: number) {
    res.push([...subset]);

    for (let i = startIndex; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      subset.push(nums[i]);
      used[i] = true;
      backtrack(i + 1);
      subset.pop();
      used[i] = false;
    }
  }

  nums.sort((a, b) => a - b);

  backtrack(0);

  return res;
}
