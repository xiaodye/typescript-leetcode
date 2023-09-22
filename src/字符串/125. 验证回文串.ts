/**
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 * @param s
 * @returns
 */
export default function isPalindrome(s: string): boolean {
    // 1. 利用正则表达式去除所有非 [a-zA-Z0-9] 的字符，2. 把大写字母转小写
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // 3. 使用双指针进行解题
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
}
