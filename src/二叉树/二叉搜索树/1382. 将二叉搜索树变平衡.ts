import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
 * 如果有多种构造方法，请你返回任意一种。
 * @param root
 * @returns
 */
export default function balanceBST(root: TreeNode | null): TreeNode | null {
  // nums 是二叉树中序遍历序列
  const nums: number[] = [];

  function inorder(root: TreeNode | null): void {
    if (!root) return;

    if (root.left) inorder(root.left);
    nums.push(root.val);
    if (root.right) inorder(root.right);
  }

  function buildAVL(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = buildAVL(left, mid - 1);
    root.right = buildAVL(mid + 1, right);

    return root;
  }

  // 获取二叉树的中序遍历序列
  inorder(root);

  // 根据中序遍历序列构造平衡二叉搜索树
  return buildAVL(0, nums.length - 1);
}
