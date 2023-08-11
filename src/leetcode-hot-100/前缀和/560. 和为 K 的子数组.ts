/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。
 * @param nums
 * @param k
 * @returns
 */
export default function subarraySum(nums: number[], k: number): number {
  // key：前缀和，value：出现的次数,假设prefix[-1] = 0;
  const map = new Map<number, number>([[0, 1]]);
  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    // 查找prefix[j] - prefix[i - 1] === k
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    if (map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }

  return count;
}
