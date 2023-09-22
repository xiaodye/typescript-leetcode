/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * @param s
 * @param wordDict
 * @returns
 */
function wordBreak(s: string, wordDict: string[]): boolean {
    // 动态规划
    // dp[i]: 前 i 个字符能否和由字典的字符组成 对应下标 i - 1
    // dp[i] = dp[i - w[0].length] || dp[i - w[1].length] || ...
    // dp 初始化，dp[0] = true, 表示 空字符出现在字典里

    const dp: boolean[] = [];

    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const subStr = s.substring(j, i);

            if (wordDict.includes(subStr) && dp[j]) {
                dp[i] = true;
                break;
            } else {
                dp[i] = false;
            }
        }
    }

    return dp[s.length];
}

export default wordBreak;
