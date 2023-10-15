/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param s
 * @returns
 */
function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;

    const set = new Set<string>();

    // i: 左指针， j: 右指针
    let i = 0;
    let j = 0;

    let maxLen = 0;

    while (i <= j && j < s.length) {
        // 窗口缩小
        // 每次删除一个字符, i === 0 不用删除
        if (i !== 0) {
            set.delete(s[i - 1]);
        }

        // 窗口扩大
        while (j < s.length && !set.has(s[j])) {
            set.add(s[j]);
            j++;
        }

        // 重新计算 maxLen
        maxLen = Math.max(maxLen, j - i);

        i++;
    }

    return maxLen;
}

export default lengthOfLongestSubstring;
