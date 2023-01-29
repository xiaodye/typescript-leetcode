import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。
 * 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 * @param root
 * @param val
 * @returns
 */
export default function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}
