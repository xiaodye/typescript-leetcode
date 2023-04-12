/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param n
 * @returns
 */
export default function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  function backtrack(l: number, r: number, str: string): void {
    if (l > n || r > n) return;
    if (l < r) return;
    if (l === n && r === n) {
      res.push(str);
      return;
    }

    backtrack(l + 1, r, str + "(");
    backtrack(l, r + 1, str + ")");
  }

  backtrack(0, 0, "");

  return res;
}
