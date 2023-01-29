import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
 * 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
 * @param nums
 * @returns
 */
export default function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  // 定义一个递归函数，用于构造BST
  function buildBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(nums[mid]);

    // 递归构造左右子树
    root.left = buildBST(left, mid - 1);
    root.right = buildBST(mid + 1, right);

    return root;
  }

  return buildBST(0, nums.length - 1);
}
