/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值: 双端队列法
 * @param nums
 * @param k
 * @returns
 */
const maxSlidingWindow = function (nums: number[], k: number): number[] {
  const res: number[] = [];
  const deque: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // 当队尾元素小于当前元素时
    while (deque.length !== 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    // 入队当前元素索引（注意是索引）
    deque.push(i);
    // 当队头元素的索引已经被排除在滑动窗口之外时
    while (deque[0] <= i - k) {
      deque.shift();
    }
    // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
    if (i >= k - 1) {
      res.push(deque[0]);
    }
  }
  return res;
};

export {};
