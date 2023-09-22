import TreeNode from "../data-structure/TreeNode";

/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * @param p
 * @param q
 * @returns
 */
export default function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // p === null && q === null true
    // p === null || q === null false
    // p.val !== q.val false
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    // 递归子节点
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
