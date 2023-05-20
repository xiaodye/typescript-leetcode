import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 * @param root
 * @param p
 * @param q
 * @returns
 */
export default function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  if (!root || p === root || q === root) return root;

  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);

  if (leftNode && rightNode) return root;

  return leftNode ?? rightNode;
}
