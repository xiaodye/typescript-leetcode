import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(n)
 *
 * @param root
 * @returns
 */
export default function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    const left = countNodes(root.left);
    const right = countNodes(root.right);

    return left + right + 1;
}
