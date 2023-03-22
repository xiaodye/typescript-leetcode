import TreeNode from "../data-structure/TreeNode";

/**
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * @param root
 * @returns
 */
export default function mirrorTree(root: TreeNode): TreeNode {
  if (!root) return null;

  const left = mirrorTree(root.right);
  const right = mirrorTree(root.left);

  root.left = left;
  root.right = right;

  return root;
}
