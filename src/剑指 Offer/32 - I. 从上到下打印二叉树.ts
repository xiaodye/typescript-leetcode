import TreeNode from "../data-structure/TreeNode";

/**
 * 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
 * @param root
 * @returns
 */
export default function levelOrder(root: TreeNode): number[] {
  if (!root) return [];

  // 定义队列，根元素先进队
  const queue: TreeNode[] = [root];
  const res: number[] = [];

  while (queue.length !== 0) {
    // 获取当前层的元素个数
    const len = queue.length;

    // 遍历当前层的每个元素
    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      res.push(top.val);

      // 把下一层的元素进队列
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
  }

  return res;
}
