import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(n)
 *
 * @param root
 * @returns
 */
export default function countNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let num = 0;

  while (queue.length !== 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      num++;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return num;
}
