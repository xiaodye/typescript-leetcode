/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * @param s
 * @param p
 * @returns
 */
export default function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return [];

    // key为字符，value为出现的次数
    const need = new Map<string, number>();
    const res: number[] = [];

    // 符合need数量字符串种类数，当need.ize === vaild，即符合字母异位词
    let vaild = 0;

    // 记录滑动窗口有效字符的个数
    const win = new Map<string, number>();

    // 记录字符串p各个字母出现的次数
    for (const char of p) {
        if (need.has(char)) {
            need.set(char, need.get(char) + 1);
        } else {
            need.set(char, 1);
        }
    }

    // 定义左右指针
    let l = 0;
    let r = 0;

    while (r < s.length) {
        const char = s[r];

        r++;

        if (need.has(char)) {
            win.set(char, win.has(char) ? win.get(char) + 1 : 1);

            if (win.get(char) === need.get(char)) {
                vaild++;
            }
        }

        // 当滑动窗口的大小超出p串长度时 收缩窗口
        while (r - l >= p.length) {
            if (vaild === need.size) {
                res.push(l);
            }

            const deletedChar = s[l];
            l++;

            if (win.has(deletedChar)) {
                // 如果离开字符数和所需字符数一致
                if (win.get(deletedChar) === need.get(deletedChar)) {
                    // 有效字符减少一个
                    vaild--;
                }

                // 更新滑动窗口中的字符数
                win.set(deletedChar, win.get(deletedChar) - 1);
            }
        }
    }

    return res;
}
