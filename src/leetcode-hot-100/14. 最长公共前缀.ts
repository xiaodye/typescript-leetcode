/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param strs
 * @returns
 */
export default function longestCommonPrefix(strs: string[]): string {
    // 解法：纵向扫描
    // 考虑空数组情况
    if (strs.length === 0) return "";
    // 考虑只有一个字符串情况
    if (strs.length === 1) return strs[0];

    let res = "";

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            // 两种情况
            // 1. i 越界，不够长
            // 2. 字符不匹配
            if (i >= strs[j].length || char !== strs[j][i]) {
                return res;
            }
        }

        // 内层for循环未退出，说明匹配成功，添加到res;
        res += char;
    }

    // 出现所有字符串都一样的情况
    return res;
}
