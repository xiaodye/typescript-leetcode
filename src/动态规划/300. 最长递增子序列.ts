/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * @param nums
 * @returns
 */
export default function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array<number>(nums.length).fill(1);
  let maxLen = 1;

  // 从第2个元素开始，遍历整个数组
  for (let i = 1; i < nums.length; i++) {
    // 每遍历一个新元素，都要“回头看”，看看能不能延长原有的上升子序列
    for (let j = 0; j < i; j++) {
      // 若遇到了一个比当前元素小的值，则意味着遇到了一个可以延长的上升子序列，故更新当前元素索引位对应的状态
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    if (dp[i] > maxLen) {
      maxLen = dp[i];
    }
  }

  return maxLen;
}

// test
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
debugger;
