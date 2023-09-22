/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：
 * 0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。
 * 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * @param num
 * @returns
 */
export default function translateNum(num: number): number {
    // dp[i] ：翻译前 i 个数的方法数。
    // dp[i] = dp[i-1] + dp[i-2](if(s[i-2 ~ i-1]))
    const str = String(num);
    const dp: number[] = [];

    // 初始化dp, 方便满足通式，dp[2] = dp[1] + dp[0] = 2;
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 1; i < str.length + 1; i++) {
        const temp = Number(str[i - 2] + str[i - 1]);
        if (temp >= 10 && temp <= 25) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }

    return dp[str.length];
}
