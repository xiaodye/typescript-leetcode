/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * @param height
 * @returns
 */
export default function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let res = 0;

  while (i < j) {
    if (height[i] <= height[j]) {
      res = Math.max(res, height[i] * (j - i));
      i++;
    } else {
      res = Math.max(res, height[j] * (j - i));
      j--;
    }
  }

  return res;
}
