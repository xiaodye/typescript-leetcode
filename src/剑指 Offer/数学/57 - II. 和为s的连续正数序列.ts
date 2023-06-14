/**
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * @param target
 * @returns
 */
export default function findContinuousSequence(target: number): number[][] {
  const res: number[][] = [];
  const deque: number[] = [];
  let sum = 0;

  for (let i = 1; i <= Math.ceil(target / 2); i++) {
    deque.push(i);
    sum += i;

    // 当前窗口元素和大于 target, 首部出队
    while (sum > target) {
      const front = deque.shift();
      sum -= front;
    }

    if (sum === target) {
      res.push([...deque]);
    }
  }

  return res;
}
