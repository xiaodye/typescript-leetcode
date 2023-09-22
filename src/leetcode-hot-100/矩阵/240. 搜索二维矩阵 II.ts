/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * - 每行的元素从左到右升序排列。
 * - 每列的元素从上到下升序排列。
 * @param matrix
 * @param target
 * @returns
 */
export default function searchMatrix(matrix: number[][], target: number): boolean {
    for (const row of matrix) {
        const index = search(row, target);

        if (index !== -1) {
            return true;
        }
    }

    return false;
}

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}
