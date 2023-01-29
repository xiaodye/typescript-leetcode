import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。
 * 返回二叉搜索树（有可能被更新）的根节点的引用。
 * @param root
 * @param key
 * @returns
 */
export default function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    /**
     * 四种情况：
     * 1.要删除的节点为叶子节点，直接删除
     * 2.无左又右
     * 3.无右有左
     * 4.有左有右，寻找右子树的最左节点
     */
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left) {
      root = root.right;
    } else if (!root.right) {
      root = root.left;
    } else {
      let successor = root.right;

      // 寻找右子树的最左节点
      while (successor.left) {
        successor = successor.left;
      }

      // 更新root值，并把右子树的最左节点删除
      root.val = successor.val;
      root.right = deleteNode(root.right, successor.val);
    }
  }

  return root;
}
