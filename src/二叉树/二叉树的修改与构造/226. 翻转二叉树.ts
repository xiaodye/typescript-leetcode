import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * @param root
 * @returns
 */
export default function invertTree(root: TreeNode | null): TreeNode | null {
  // 边界，0 | 1 节点，无需翻转
  if (!root || (!root.left && !root.right)) return root;

  // 2. 获取翻转后的左右子树
  const left = invertTree(root.left);
  const right = invertTree(root.right);

  // 3. 翻转当前节点
  root.left = right;
  root.right = left;

  return root;
}
