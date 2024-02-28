/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * @param text1
 * @param text2
 * @returns
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    // dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
    // dp[i][j] = dp[i - 1][j - 1] + 1 当 text1[i - 1] === text2[j - 1]

    const len1 = text1.length;
    const len2 = text2.length;

    const dp = new Array<number[]>(len1 + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array<number>(len2 + 1).fill(0);
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[len1][len2];
}

export default longestCommonSubsequence;
