/**
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 给定一个罗马数字，将其转换成整数。
 * @param s
 * @returns
 */
export default function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        const value = map.get(s[i]);

        if (i < s.length - 1 && value < map.get(s[i + 1])) {
            res -= value;
        } else {
            res += value;
        }
    }

    return res;
}
