/**
 * 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
 * @param nums
 * @returns
 */
export default function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  let res = 0;

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const [num, count] of map) {
    if (count === 1) {
      res = num;
      break;
    }
  }

  return res;
}
