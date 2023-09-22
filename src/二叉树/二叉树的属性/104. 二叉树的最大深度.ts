import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉树，找出其最大深度。
 * @param root
 * @returns
 */
export default function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
}
