/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
 * @param strs
 * @returns
 */
export default function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    // 对字符串进行排序
    const key = strs[i].split("").sort().join("");

    if (map.has(key)) {
      map.get(key).push(strs[i]);
    } else {
      map.set(key, [strs[i]]);
    }
  }

  return [...map.values()];
}
