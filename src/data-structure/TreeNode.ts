/**
 * 二叉树节点类
 */
export default class TreeNode<T = number> {
  val: T;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: T, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
