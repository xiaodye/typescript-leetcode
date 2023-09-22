/**
 * 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
 * @param nums
 * @returns
 */
export default function findMin(nums: number[]): number {
    if (nums.length === 1 || nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2);

        if (nums[0] <= nums[mid]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return nums[l];
}
