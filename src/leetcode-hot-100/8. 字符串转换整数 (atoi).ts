/**
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
 * @param s
 * @returns
 */
export default function myAtoi(s: string): number {
    if (s.length === 0) return 0;

    // i为指针，用于遍历，note为符号
    let i = 0;
    let note = 1;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    // 去除首部空格
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // 先获取符号
    if (s[i] === "+") {
        note = note;
        i++;
    } else if (s[i] === "-") {
        note = -note;
        i++;
    }

    // 匹配字符串，获取数字字符串
    const matchArr = s.substring(i).match(/^\d+/);

    // matchArr为null, 匹配不成功，无法转换
    if (!matchArr) return 0;

    // 保存结果
    const res = Number(matchArr[0]) * note;

    if (res < INT_MIN) return INT_MIN;
    if (res > INT_MAX) return INT_MAX;

    return res;
}

/**
 * 直接用isNaN和parseInt
 * @param s
 * @returns
 */
export function myAtoi2(s: string): number {
    const num = parseInt(s, 10);
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (isNaN(num)) {
        return 0;
    } else if (num < INT_MIN) {
        return INT_MIN;
    } else if (num > INT_MAX) {
        return INT_MAX;
    } else {
        return num;
    }
}
