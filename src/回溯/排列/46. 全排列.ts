/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 * 时间复杂度：O(n * n!)
 * 空间复杂度：O(n)
 *
 * @param nums
 * @returns
 */
export default function permute(nums: number[]): number[][] {
  // used 用于记录之前已经添加的元素，path用于记录排列组合
  const res: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = [];

  function backtrack(nth: number): void {
    if (nth === nums.length) {
      // 数组是引用类型，所以需要浅拷贝一个数组，否则后序path变动，res里的元素也会变动
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack(nth + 1);

      // 回溯操作
      path.pop();
      used[i] = false;
    }
  }

  backtrack(0);

  return res;
}

// test
console.log(permute([1, 2, 3]));
debugger;
