/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * @param intervals
 * @returns
 */
function merge(intervals: number[][]): number[][] {
    // 需要先排序，规则：每一个数组第一个元素大小
    // 1. 如果两个数组中，前一个数组右边界小于后一个数组的左边界，不需要合并
    // 2. 前一个数组右边界大于后一个数组的左边界，合并边界
    // 3. 前一个数组右边界大于后一个数组的右边界，合并数组

    const res: number[][] = [];
    const len = intervals.length;

    // 将所有区间按照第一个元素大小排序
    intervals.sort((a, b) => a[0] - b[0]);

    res.push(intervals[0]);

    for (let i = 1; i < len; i++) {
        const tail = res[res.length - 1];

        if (tail[1] >= intervals[i][0]) {
            tail[1] = Math.max(tail[1], intervals[i][1]);
        } else {
            res.push(intervals[i]);
        }
    }

    return res;
}

export default merge;
