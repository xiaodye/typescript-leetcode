import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你两棵二叉树： root1 和 root2，返回合并后的二叉树。
 * @param root1
 * @param root2
 * @returns
 */
export default function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) return root2;
  if (!root2) return root1;

  root1.val += root2.val;

  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  return root1;
}
