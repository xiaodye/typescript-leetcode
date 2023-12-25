/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * @param nums
 * @param target
 * @returns
 */
function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);

        if (nums[mid] > target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            return mid;
        }
    }

    // 分别处理如下四种情况
    // 1.目标值在数组所有元素之前  [0, -1]
    // 2.目标值等于数组中某一个元素  return middle;
    // 3.目标值插入数组中的位置 [left, right]，return  right + 1
    // 4.目标值在数组所有元素之后的情况 [left, right]， 因为是右闭区间，所以 return right + 1

    // while 结束后，肯定是left > right，并且紧挨着
    return l;
}

export default searchInsert;
