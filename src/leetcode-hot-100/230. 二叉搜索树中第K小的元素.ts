import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * @param root
 * @param k
 * @returns
 */
export default function kthSmallest(root: TreeNode | null, k: number): number {
  let res = 0;

  function inorder(root: TreeNode): void {
    if (!root || k === 0) return;

    inorder(root.left);

    if (--k === 0) {
      res = root.val;
      return;
    }

    inorder(root.right);
  }

  inorder(root);

  return res;
}
