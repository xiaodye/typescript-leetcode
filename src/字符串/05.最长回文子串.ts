/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param s 字符串s
 * @returns 最长回文子串
 */
export default function longestPalindrome(s: string): string {
  // 初始化一个二维数组，dp[i][j]表示字符串索引[i-j]的子串是否为回文字符串
  const dp = new Array<(0 | 1)[]>(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<0 | 1>(s.length).fill(0);
  }

  // 初始化最长回文子串的两个端点值
  let start = 0;
  let end = 0;

  // 初始化最长回文子串的初始值为1
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  // 处理长度为2的子串
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      start = i;
      end = i + 1;
    }
  }

  // n 代表子串的长度，从3开始递增
  for (let n = 2; n <= s.length; n++) {
    // 下面的两层循环，用来实现状态转移方程
    for (let i = 0; i < s.length - n + 1; i++) {
      // i和j指向子串的两个端点
      let j = i + n - 1;
      if (dp[i + 1][j - 1] === 1) {
        if (s[i] === s[j]) {
          dp[i][j] = 1;
          start = i;
          end = j;
        }
      }
    }
  }

  // 截取子串
  return s.slice(start, end + 1);
}

// test
console.log(longestPalindrome("babad"));
debugger;
