import TreeNode from "../data-structure/TreeNode";

/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * @param preorder
 * @param inorder
 */
export default function buildTree(preorder: number[], inorder: number[]): TreeNode {
  const len = preorder.length;

  function build(preL: number, preR: number, inL: number, inR: number): TreeNode {
    if (preL > preR) return null;

    const root = new TreeNode(preorder[preL]);
    const k = inorder.indexOf(root.val);
    const numLeft = k - inL;

    root.left = build(preL + 1, preL + numLeft, inL, k - 1);
    root.right = build(preL + numLeft + 1, preR, k + 1, inR);

    return root;
  }

  return build(0, len - 1, 0, len - 1);
}
