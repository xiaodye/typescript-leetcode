/**
 * nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
 * 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
 * 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。
 * 如果不存在下一个更大元素，那么本次查询的答案是 -1 。
 * 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
 * @param nums1
 * @param nums2
 * @returns
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // 子问题1：计算 nums2 每个元素右边更大的值
    // 子问题2：如何存储问题1的结果，保证查询效率

    // key: 元素, value: 下一个比它大的元素
    const map = new Map<number, number>();
    const res: number[] = [];

    // 定义一个双端队列，存放索引
    const deque: number[] = [];

    for (let i = 0; i < nums2.length; i++) {
        while (deque.length > 0 && nums2[i] > nums2[deque[deque.length - 1]]) {
            const top = deque.pop();
            map.set(nums2[top], nums2[i]);
        }

        deque.push(i);
    }

    // 一些未出栈元素，说明没有比他们更大的元素，复值 -1
    while (deque.length !== 0) {
        map.set(nums2[deque.pop()], -1);
    }

    // 取结果
    for (let i = 0; i < nums1.length; i++) {
        res.push(map.get(nums1[i]));
    }

    return res;
}

export default nextGreaterElement;
