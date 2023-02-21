/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
 * - 0 <= i, j, k, l < n
 * - nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 *
 * 复杂度分析：
 * - 时间复杂度：O(n^2)
 * - 空间复杂度：O(n^2)
 *
 * @param nums1
 * @param nums2
 * @param nums3
 * @param nums4
 * @returns
 */
export default function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  // key: a+b, value: 出现的次数
  const map = new Map<number, number>();
  let count = 0;

  // 遍历arr1和大arr2数组，统计两个数组元素之和，和出现的次数，放到map中。
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];

      if (map.has(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }

  // 在遍历arr3和arr4数组，找到如果 0-(c+d) 在map中出现过的话, 就用count把map中key对应的value也就是出现次数统计出来。
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = -(nums3[i] + nums4[j]);

      if (map.has(sum)) {
        count += map.get(sum);
      }
    }
  }

  return count;
}
