/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。
 * 滑动窗口每次只向右移动一位。
 * @param nums
 * @param k
 * @returns
 */
export default function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = [];

  // 定义一个双端队列
  const queue: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    // 使用双端队列维护一个递减队列
    while (queue.length !== 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }

    // 队列存的是索引
    queue.push(i);

    // 若队头元素不在当前窗口范围内，则出队
    while (queue[0] <= i - k) {
      queue.shift();
    }

    // 当i===k-1, 出现第一个最大值
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }

  return res;
}
