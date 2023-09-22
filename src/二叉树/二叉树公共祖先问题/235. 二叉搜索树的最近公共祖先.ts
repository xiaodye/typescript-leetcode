import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * @param root
 * @param p
 * @param q
 * @returns
 */
export default function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    // 情况一：当点节点 > p.val 和 q.val ，左边递归查找
    // 情况二：当前节点 < p.val 和 q.val，右边递归查找
    // 情况三：直接返回该节点即可，可细分为两种
    //  1. 当前节点 > 其中一个，小于其中一个
    //  2. 当前节点等于其中一个

    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
}
