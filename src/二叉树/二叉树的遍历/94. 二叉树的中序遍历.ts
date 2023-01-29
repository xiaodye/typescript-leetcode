import TreeNode from "../../data-structure/TreeNode";

/**
 * 二叉树的中序遍历
 * @param root
 * @returns
 */
export default function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  function inorderTraversalNode(root: TreeNode | null): void {
    if (!root) return;

    // 左根右
    inorderTraversalNode(root.left);
    res.push(root.val);
    inorderTraversalNode(root.right);
  }

  inorderTraversalNode(root);

  return res;
}
