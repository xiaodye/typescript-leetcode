import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * @param root
 * @returns
 */
export default function isSymmetric(root: TreeNode | null): boolean {
    return check(root.left, root.right);
}

function check(left: TreeNode, right: TreeNode): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return check(left.left, right.right) && check(left.right, right.left);
}
