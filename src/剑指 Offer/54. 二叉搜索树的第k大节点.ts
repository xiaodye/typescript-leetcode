import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
 * @param root
 * @param k
 * @returns
 */
export default function kthLargest(root: TreeNode | null, k: number): number {
  let res = 0;

  function traversal(root: TreeNode): void {
    if (!root || k === 0) return;

    traversal(root.right);
    if (--k === 0) {
      res = root.val;
      return;
    }
    traversal(root.left);
  }

  traversal(root);

  return res;
}
