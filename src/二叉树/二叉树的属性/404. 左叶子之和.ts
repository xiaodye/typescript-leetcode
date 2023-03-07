import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定二叉树的根节点 root ，返回所有左叶子之和。
 * @param root
 * @returns
 */
export default function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;

  if (root.left) {
    sum += isLeafNode(root.left) ? root.left.val : sumOfLeftLeaves(root.left);
  }
  if (root.right && !isLeafNode(root.right)) {
    sum += sumOfLeftLeaves(root.right);
  }

  return root ? sum : 0;
}

function isLeafNode(root: TreeNode | null): boolean {
  return !root.left && !root.right;
}
