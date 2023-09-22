/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * @param s
 * @returns
 */
export default function decodeString(s: string): string {
    const strStack: string[] = [];
    const numStack: number[] = [];
    let num = 0;
    let res = "";

    for (let i = 0; i < s.length; i++) {
        // 当字符为数字时
        if (!Number.isNaN(Number(s[i]))) {
            num = num * 10 + Number(s[i]);
        } else if (s[i] === "[") {
            strStack.push(res);
            res = "";
            numStack.push(num);
            num = 0;
        } else if (s[i] === "]") {
            const repeatTimes = numStack.pop();

            res = strStack.pop() + res.repeat(repeatTimes);
        } else {
            res += s[i];
        }
    }

    return res;
}
