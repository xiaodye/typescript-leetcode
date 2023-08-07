/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * @param nums
 * @returns
 */
export default function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = [];

  // 需要给数组排个序
  nums.sort((a, b) => a - b);

  function backtrack(depth: number): void {
    if (depth === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 这个数已经使用过了
      if (used[i]) continue;
      // 去重
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack(depth + 1);
      path.pop();
      used[i] = false;
    }
  }

  backtrack(0);

  return res;
}
