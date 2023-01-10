/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * @param intervals
 * @returns
 */
export default function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  const res: number[][] = [];
  const len = intervals.length;

  // 将所有区间按照第一个元素大小排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 将第一个区间（起始元素最小的区间）推入结果数组（初始化）
  res.push(intervals[0]);

  // 按照顺序，逐个遍历所有区间
  for (let i = 1; i < len; i++) {
    let prev = res[res.length - 1];

    // 若满足交错关系（前一个的尾部 >= 下一个的头部）
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}

// test
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
debugger;
