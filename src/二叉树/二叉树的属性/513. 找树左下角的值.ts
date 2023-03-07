import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。
 * 假设二叉树中至少有一个节点。
 * @param root
 * @returns
 */
export default function findBottomLeftValue(root: TreeNode | null): number {
  const queue: TreeNode[] = [root];
  let res = 0;

  while (queue.length !== 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (i === 0) {
        res = node.val;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
}
