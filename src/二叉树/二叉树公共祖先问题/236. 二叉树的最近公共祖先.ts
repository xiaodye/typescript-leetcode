import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
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
  // 若当前结点不存在（意味着无效）或者等于 p 或 q （意味着找到目标），则直接返回
  if (!root || root === p || root === q) return root;

  // 后序遍历寻找p,q
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果左子树和右子树同时包含了p和q，那么这个结点一定是最近公共祖先
  if (left && right) return root;

  // 如果左子树和右子树其中一个包含了p或者q，则把对应的有效子树汇报上去，等待进一步的判断；否则返回空
  return left ?? right;
}
