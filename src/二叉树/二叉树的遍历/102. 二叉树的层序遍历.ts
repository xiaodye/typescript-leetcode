import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 * @param root
 * @returns
 */
export default function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  // 定义一个队列，定义结果数组
  const queue: TreeNode[] = [];
  const res: number[][] = [];

  queue.push(root);

  while (queue.length !== 0) {
    // len代表当前层节点数，arr用于存储节点
    let len = queue.length;
    const arr: number[] = [];

    while (len !== 0) {
      const top = queue.shift();
      arr.push(top.val);

      // 如果存在左或右子节点，则进队列
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);

      len--;
    }

    // 此时已完成一层的遍历，push into res
    res.push(arr);
  }

  return res;
}
