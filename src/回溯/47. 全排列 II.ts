/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * @param nums
 * @returns
 */
export default function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const used = new Array<boolean>(nums.length).fill(false);

  function backtrack(nth: number): void {
    if (nth === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }

      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backtrack(nth + 1);
        path.pop();
        used[i] = false;
      }
    }
  }

  nums.sort((a, b) => a - b);
  backtrack(0);

  return res;
}
