import TreeNode from "../data-structure/TreeNode";

/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树，你可以假设树中没有重复的元素。
 * @param preorder 前序遍历数组
 * @param inorder 中序遍历数组
 * @returns 新二叉树根节点
 */
export default function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const len = preorder.length;

  // 构建二叉树的一些重复步骤，封装成一个函数，用于递归调用
  function build(preL: number, preR: number, inL: number, inR: number): TreeNode | null {
    // 处理边界情况
    if (preL > preR) return null;

    /**
     * root: 根节点
     * k: 一颗二叉树的根节点在中序遍历序列的位置，题目已经假设没有重复元素
     * numLeft: 左子树中结点的个数
     */
    const root = new TreeNode(preorder[preL]);
    const k = inorder.indexOf(root.val);
    const numLeft = k - inL;

    // 构造左右子树
    root.left = build(preL + 1, preL + numLeft, inL, k - 1);
    root.right = build(preL + numLeft + 1, preR, k + 1, inR);

    return root;
  }

  return build(0, len - 1, 0, len - 1);
}

// test
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
debugger;
