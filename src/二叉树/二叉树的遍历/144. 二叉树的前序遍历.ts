import TreeNode from "../../data-structure/TreeNode";

/**
 * 二叉树的前序遍历
 * @param root
 * @returns
 */
export default function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  // 定义一个结果数组，存储节点值
  const res: number[] = [];

  // 定义一个递归函数，重复执行步骤
  function preorderTraversalNode(root: TreeNode | null): void {
    if (!root) return;

    res.push(root.val);

    // 递归遍历左右子树
    preorderTraversalNode(root.left);
    preorderTraversalNode(root.right);
  }

  preorderTraversalNode(root);

  return res;
}
