import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 * @param root
 * @returns
 */
export default function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];

  function postorderTraversalNode(root: TreeNode | null): void {
    if (!root) return;

    // 左右根
    postorderTraversalNode(root.left);
    postorderTraversalNode(root.right);
    res.push(root.val);
  }

  postorderTraversalNode(root);

  return res;
}
