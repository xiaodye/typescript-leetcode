import TreeNode from "../data-structure/TreeNode";

/**
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * @param root
 * @returns
 */
export default function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftHeight = maxDepth(root.left);
  const rightHeight = maxDepth(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
