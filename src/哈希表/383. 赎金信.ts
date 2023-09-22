/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * 如果可以，返回 true ；否则返回 false 。
 *
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 *
 * - 时间复杂度：O(m + n)
 * - 空间复杂度：O(|S|), 这道题中 SSS 为全部小写英语字母，因此 S=26。
 *
 * @param ransomNote
 * @param magazine
 * @returns
 */
export default function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;

    // key: 字符, value: 个数
    const visted = new Map<string, number>();

    // 先遍历 magazine, 存储每个字符次数
    for (let i = 0; i < magazine.length; i++) {
        if (visted.has(magazine[i])) {
            visted.set(magazine[i], visted.get(magazine[i]) + 1);
        } else {
            visted.set(magazine[i], 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];

        if (!visted.has(char) || visted.get(char) === 0) {
            return false;
        }

        visted.set(char, visted.get(char) - 1);
    }

    return true;
}
