/**
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 * @param s
 * @returns
 */
function repeatedSubstringPattern(s: string): boolean {
    // 将两个 sss 连在一起，并移除第一个和最后一个字符，
    // 那么得到的字符串一定包含 sss，即 sss 是它的一个子串。

    const str = (s + s).slice(1, -1);

    return str.indexOf(s) !== -1;
}

export default repeatedSubstringPattern;
