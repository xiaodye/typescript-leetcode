/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果 needle 不是 haystack 的一部分，则返回  -1 。
 *
 * - 时间复杂度：O(m+n)
 * - 空间复杂度：O(m)
 *
 * @param haystack
 * @param needle
 * @returns
 */
export default function strStr(haystack: string, needle: string): number {
    // 获取字符串needle的前缀表
    const next = getNext(needle);

    // i指向haystack, j指向needle
    for (let i = 0, j = 0; i < haystack.length; i++) {
        // 不匹配，则回退
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }

        // 匹配，则前进
        if (haystack[i] === needle[j]) {
            j++;
        }

        // j === needle.length, 说明已经匹配成功了
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }

    return -1;
}

/**
 * 获取字符串s的前缀表
 * @param s
 * @returns
 */
function getNext(s: string): number[] {
    const next = new Array<number>(s.length).fill(0);

    // 定义两个指针i和j，j指向前缀末尾位置，i指向后缀末尾位置。
    for (let i = 1, j = 0; i < s.length; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = next[j - 1];
        }

        if (s[i] === s[j]) {
            j++;
        }

        next[i] = j;
    }

    return next;
}
