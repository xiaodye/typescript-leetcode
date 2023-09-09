/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param n
 * @returns
 */
export default function generateParenthesis(n: number): string[] {
  // 回溯
  const res: string[] = [];

  /**
   * 回溯
   * @param left 左括号数量
   * @param right 右括号数量
   * @param str 当前字符串
   * @returns
   */
  function backtrack(left: number, right: number, str: string): void {
    // 边界
    // 1. 右边括号数量 > 左边数量
    // 2. 字符串长度 === 2n
    if (left < right) return;
    if (left === right && left === n) {
      res.push(str);
      return;
    }

    if (left < n) backtrack(left + 1, right, str + "(");
    if (right < n) backtrack(left, right + 1, str + ")");
  }

  backtrack(0, 0, "");

  return res;
}
