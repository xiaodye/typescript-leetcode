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

  // 定义一个栈
  const stack: TreeNode[] = [root];

  while (stack.length !== 0) {
    const curr = stack.pop();
    res.push(curr.val);

    // 根据栈的特性，应先右后左
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return res;
}
