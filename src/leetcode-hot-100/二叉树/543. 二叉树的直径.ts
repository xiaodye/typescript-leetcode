import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵二叉树的根节点，返回该树的 直径 。
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 * 两节点之间路径的 长度 由它们之间边数表示。
 * @param root
 */
export default function diameterOfBinaryTree(root: TreeNode | null): number {
  // 路径长度 === 节点数 - 1
  // 节点数 === 树的高度
  // 以某个节点为根的最长路径 === 左子树高度 + 右子树高度
  // 求树中各个节点最长路径 === 左子树高度 + 右子树高度

  if (!root.left && !root.right) return 0;

  let max = 0;

  function depth(root: TreeNode): number {
    if (!root) return 0;

    const left = depth(root.left);
    const right = depth(root.right);

    // 更新最大值
    max = Math.max(max, left + right);

    return Math.max(left, right) + 1;
  }

  depth(root);

  return max;
}
