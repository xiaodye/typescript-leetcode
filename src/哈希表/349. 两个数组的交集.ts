/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 *
 * - 时间复杂度：O(m+n)
 * - 空间复杂度：O(min(n,m))
 *
 * @param nums1
 * @param nums2
 * @returns
 */
export default function intersection(nums1: number[], nums2: number[]): number[] {
  const visted = new Set<number>(nums1);
  const resSet = new Set<number>();

  for (let i = 0; i < nums2.length; i++) {
    if (visted.has(nums2[i])) {
      resSet.add(nums2[i]);
    }
  }

  return [...resSet];
}
