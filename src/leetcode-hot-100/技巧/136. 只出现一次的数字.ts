/**
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 * @param nums
 * @returns
 */
export default function singleNumber(nums: number[]): number {
  let res = 0;

  // a^a === 0;
  // a^0 === a;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }

  return res;
}
