/**
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * @param s
 * @returns
 */
export default function firstUniqChar(s: string): string {
    const map = new Map<string, number>();

    for (const char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (const [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }

    return " ";
}
