import TreeNode from "../../data-structure/TreeNode";

/**
 * 根据一棵树的前序遍历与中序遍历构造二叉树，你可以假设树中没有重复的元素。
 * @param preorder 前序遍历数组
 * @param inorder 中序遍历数组
 * @returns 新二叉树根节点
 */
export default function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // 边界条件
    if (preorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    // mid 是 inorder 中根节点的下标，也是左子树节点数
    const mid = inorder.indexOf(rootVal);

    // 递归构建左右子树
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
}
