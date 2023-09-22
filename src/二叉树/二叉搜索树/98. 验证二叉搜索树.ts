import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * @param root
 * @returns
 */
export default function isValidBST(root: TreeNode): boolean {
    if (!root) return true;

    const stack: TreeNode[] = [];
    let curr = root;
    let prevVal = -Infinity;

    while (curr || stack.length !== 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();

        // 如果中序遍历得到的节点的值小于等于前一个，说明不是二叉搜索树
        if (curr.val <= prevVal) return false;

        prevVal = curr.val;
        curr = curr.right;
    }

    return true;
}
