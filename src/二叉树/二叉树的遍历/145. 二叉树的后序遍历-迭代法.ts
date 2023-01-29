import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 * @param root
 * @returns
 */
export default function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  // 定义一个结果数组，存储节点值
  const res: number[] = [];

  // 定义一个栈
  const stack: TreeNode[] = [root];

  while (stack.length !== 0) {
    const curr = stack.pop();
    res.unshift(curr.val);

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return res;
}
