import TreeNode from "../data-structure/TreeNode";

/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * @param root
 * @returns
 */
export default function isBalanced(root: TreeNode | null): boolean {
    return height(root) !== -1;
}

function height(root: TreeNode | null): number {
    if (!root) return 0;

    const leftHeight = height(root.left);
    const rightHeight = height(root.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight) + 1;
}
