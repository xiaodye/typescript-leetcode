/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 * @param s
 * @returns
 */
export default function partition(s: string): string[][] {
  if (s.length === 1) return [[s[0]]];

  const res: string[][] = [];
  const path: string[] = [];

  function backtrack(startIndex: number): void {
    if (startIndex === s.length) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i < s.length; i++) {
      if (!isPalindrome(s, startIndex, i)) continue;

      const subStr = s.substring(startIndex, i + 1);
      path.push(subStr);

      // 深度搜索
      backtrack(i + 1);

      // 回溯
      path.pop();
    }
  }

  backtrack(0);

  return res;
}

/**
 * 判断局部回文串
 * @param s
 * @param l
 * @param r
 * @returns
 */
function isPalindrome(s: string, l: number, r: number): boolean {
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
}
