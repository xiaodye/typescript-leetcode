import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
 * - 创建一个根节点，其值为 nums 中的最大值。
 * - 递归地在最大值 左边 的 子数组前缀上 构建左子树。
 * - 递归地在最大值 右边 的 子数组后缀上 构建右子树。
 * - 返回 nums 构建的 最大二叉树 。
 *
 * @param nums
 * @returns
 */
export default function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }

    // 求数组中的最大值及其下标，创建根节点
    const max = Math.max(...nums);
    const maxIndex = nums.indexOf(max);
    const root = new TreeNode(max);

    // 构建左子树
    if (maxIndex > 0) {
        root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    }

    // 构建右子树
    if (maxIndex < nums.length - 1) {
        root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length));
    }

    return root;
}
