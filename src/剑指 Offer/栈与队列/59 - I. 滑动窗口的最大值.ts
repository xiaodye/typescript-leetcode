/**
 * 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * @param nums
 * @param k
 * @returns
 */
export default function maxSlidingWindow(nums: number[], k: number): number[] {
    // 定义结果集和双端队列
    const res: number[] = [];
    const deque: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // 维护一个单调递减队列
        while (deque.length !== 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);

        // 若队头元素不在当前窗口范围内，则出队
        if (i - k + 1 > deque[0]) {
            deque.shift();
        }

        // 当i === k-1, 出现第一个最大值
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }

    return res;
}
