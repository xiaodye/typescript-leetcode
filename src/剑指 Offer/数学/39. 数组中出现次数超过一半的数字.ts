/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * @param nums
 * @returns
 */
export default function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();

  // 遍历数组，记录每个数字出现的次数
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  // 遍历map, 找出count > arr.length/2 的数字
  for (const [num, count] of map) {
    if (count > nums.length / 2) return num;
  }

  return -1;
}
