/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 * @param s
 * @param wordDict
 * @returns
 */
export default function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array<boolean>(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const subStr = s.substring(j, i);

      if (wordDict.includes(subStr) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}
