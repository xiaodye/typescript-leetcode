import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * @param root
 * @param p
 * @param q
 * @returns
 */
export default function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
}
