import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 差值是一个正数，其数值等于两值之差的绝对值。
 * @param root
 * @returns
 */
export default function getMinimumDifference(root: TreeNode): number {
  const stack: TreeNode[] = [];
  let curr = root;
  let prev: TreeNode = null;
  let res = Infinity;

  while (curr || stack.length !== 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    if (prev) {
      res = Math.min(res, curr.val - prev.val);
    }

    prev = curr;
    curr = curr.right;
  }

  return res;
}
