/**
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 * 返回一个表示每个字符串片段的长度的列表。
 * @param s
 * @returns
 */
export default function partitionLabels(s: string): number[] {
  // map 用于记录每个出现的字母最后出现的下标，key: 字母,value:最后出现的下标
  const map = new Map<string, number>();
  const res: number[] = [];

  // 记录每个字母最后出现的下标
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  // 一个片段的截止下标，随着遍历会更新
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map.get(s[i]));

    if (i === end) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }

  return res;
}
