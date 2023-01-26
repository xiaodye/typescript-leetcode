import TreeNode from "../data-structure/TreeNode";

/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * @param root
 * @returns
 */
export default function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const left = invertTree(root.right);
  const right = invertTree(root.left);

  root.left = left;
  root.right = right;

  return root;
}
