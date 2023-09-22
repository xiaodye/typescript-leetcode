/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param s 字符串s
 * @returns 最长回文子串
 */
export default function longestPalindrome(s: string): string {
    // 当字符串长度 小于2时，显然是回文串
    if (s.length < 2) return s;

    const len = s.length;
    let begin = 0;
    let end = 0;
    const dp = Array.from({ length: len }, () => new Array<boolean>(len).fill(false));

    // 1. 确定 dp 含义: dp[i][j]: s[i...j] 是否回文串
    // dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1]
    // 2. 初始化dp, 当字符串长度为1时是回文字符串, dp[i][i] = true

    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    // 一列一列的填写
    for (let j = 0; j < len; j++) {
        // 注意：只需要上三角
        for (let i = 0; i < j; i++) {
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // 看区间dp[i+1][j-1] 元素数量是否小于2
                // j - 1 - (i + 1) + 1 < 2 =>j - i < 3
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要dp[i][j] === true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i > end - begin) {
                begin = i;
                end = j;
            }
        }
    }

    return s.substring(begin, end + 1);
}
