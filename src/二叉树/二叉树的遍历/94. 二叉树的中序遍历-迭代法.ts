import TreeNode from "../../data-structure/TreeNode";

/**
 * 二叉树的中序遍历
 * @param root
 * @returns
 */
export default function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  // 定义一个结果数组，存储节点值
  const res: number[] = [];

  // 定义一个栈
  const stack: TreeNode[] = [];

  // curr 充当一个索引
  let curr = root;

  while (curr || stack.length !== 0) {
    // 这个 while 的作用是把寻找最左叶子结点的过程中，途径的所有结点都记录下来
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // 取出栈顶，进入 res
    curr = stack.pop();
    res.push(curr.val);

    // 尝试遍历右子树
    curr = curr.right;
  }

  return res;
}
