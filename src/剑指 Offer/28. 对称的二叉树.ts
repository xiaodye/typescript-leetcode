import TreeNode from "../data-structure/TreeNode";

/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 * @param root
 * @returns
 */
export default function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    return check(root.left, root.right);
}

function check(left: TreeNode, right: TreeNode): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return check(left.left, right.right) && check(left.right, right.left);
}
