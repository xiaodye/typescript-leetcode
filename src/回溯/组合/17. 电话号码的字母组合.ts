/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 * 时间复杂度：O(3^m4^n)
 * 空间复杂度：O(m+n)
 *
 * @param digits
 * @returns
 */
export default function letterCombinations(digits: string): string[] {
  // 回溯-组合-从每个数中选取一个字母进行组合
  if (digits.length === 0) return [];

  const res: string[] = [];
  const map = new Map<string, string>([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  /**
   * 回溯
   * @param index 记录遍历到第几个数字了，可以看成索引
   * @param str
   * @returns
   */
  function backtrack(index: number, str: string): void {
    if (index === digits.length) {
      res.push(str);
      return;
    }

    // 取到待查找的数字，获取对应的字母组合
    const letters = map.get(digits[index]);

    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, str + letters[i]);
    }
  }

  backtrack(0, "");

  return res;
}
