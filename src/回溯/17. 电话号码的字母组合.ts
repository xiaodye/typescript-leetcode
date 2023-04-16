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
  if (digits.length === 0) return [];

  const records: string[] = [];
  const map = new Map<number, string>([
    [2, "abc"],
    [3, "def"],
    [4, "ghi"],
    [5, "jkl"],
    [6, "mno"],
    [7, "pqrs"],
    [8, "tuv"],
    [9, "wxyz"],
  ]);

  function backtrack(index: number, str: string): void {
    if (index === digits.length) {
      records.push(str);
      return;
    }

    // 取到待查找的数字，获取对应的字母组合
    const letters = map.get(Number(digits[index]));

    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, str + letters[i]);
    }
  }

  backtrack(0, "");

  return records;
}
