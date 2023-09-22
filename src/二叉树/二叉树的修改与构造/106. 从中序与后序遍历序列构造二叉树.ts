import TreeNode from "../../data-structure/TreeNode";

/**
 * 给定两个整数数组 inorder 和 postorder。
 * 其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 * @param inorder
 * @param postorder
 * @returns
 */
export default function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const len = inorder.length;

    function build(inL: number, inR: number, postL: number, postR: number): TreeNode | null {
        if (postL > postR) return null;

        const root = new TreeNode(postorder[postR]);
        const k = inorder.indexOf(root.val);
        const numLeft = k - inL;

        root.left = build(inL, k - 1, postL, postL + numLeft - 1);
        root.right = build(k + 1, inR, postL + numLeft, postR - 1);

        return root;
    }

    return build(0, len - 1, 0, len - 1);
}
