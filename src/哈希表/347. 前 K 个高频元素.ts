/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 * @param nums
 * @param k
 * @returns
 */
export default function topKFrequent(nums: number[], k: number): number[] {
  // key: 数字, value: 次数
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // 先去重，再按频率排序，再截取数组
  return [...new Set(nums)].sort((a, b) => map.get(b) - map.get(a)).slice(0, k);
}
