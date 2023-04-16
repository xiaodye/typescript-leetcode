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
