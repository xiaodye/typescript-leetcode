import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * @param root
 * @returns
 */
export default function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack: TreeNode[] = [];
  let prev = -Infinity;

  while (stack.length !== 0 || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    // 如果中序遍历得到的节点的值小于等于前一个，说明不是二叉搜索树
    if (root.val <= prev) return false;

    prev = root.val;
    root = root.right;
  }

  return true;
}
