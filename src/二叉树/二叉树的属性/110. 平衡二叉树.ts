import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 * @param root
 * @returns
 */
export default function isBalanced(root: TreeNode | null): boolean {
  return height(root) !== -1;
}

/**
 * 计算二叉树的高度，不平衡返回 -1
 * @param root
 * @returns
 */
function height(root: TreeNode | null): number {
  if (!root) return 0;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}
