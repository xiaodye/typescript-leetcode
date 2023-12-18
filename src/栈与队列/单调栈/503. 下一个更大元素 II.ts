/**
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
 * 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。
 * 如果不存在，则输出 -1 。
 * @param nums
 * @returns
 */
function nextGreaterElements(nums: number[]): number[] {
    const len = nums.length;
    const res = new Array<number>(len).fill(-1);

    // 双端队列, 储存索引
    const deque: number[] = [];

    // len * 2 -1 相当于遍历数组两次
    for (let i = 0; i < len * 2 - 1; i++) {
        while (deque.length > 0 && nums[i % len] > nums[deque[deque.length - 1] % len]) {
            const numIndex = deque.pop();
            res[numIndex % len] = nums[i % len];
        }

        deque.push(i);
    }

    return res;
}

export default nextGreaterElements;
