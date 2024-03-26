/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param s
 * @returns
 */
function lengthOfLongestSubstring(s: string): number {
    // 思路：滑动窗口，双指针 + set

    let maxLen = 0;
    let i = 0;
    let j = 0;
    const set = new Set<string>();

    while (j < s.length) {
        // 扩大窗口
        while (j < s.length && !set.has(s[j])) {
            set.add(s[j]);
            maxLen = Math.max(maxLen, j - i + 1);
            j++;
        }

        // 缩小窗口，每次删除一个字符
        set.delete(s[i]);
        i++;
    }

    return maxLen;
}

export default lengthOfLongestSubstring;
