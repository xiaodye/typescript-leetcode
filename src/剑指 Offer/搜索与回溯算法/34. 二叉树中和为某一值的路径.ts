import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 * @param root
 * @param targetSum
 * @returns
 */
export default function pathSum(root: TreeNode, targetSum: number): number[][] {
    if (!root) return [];

    const res: number[][] = [];
    const path: number[] = [];

    function backtrack(root: TreeNode, currSum: number): void {
        if (!root) return;

        path.push(root.val);
        currSum -= root.val;

        // 节点为叶子节点，且和为targetSum
        if (!root.left && !root.right && currSum === 0) {
            res.push([...path]);
        }

        backtrack(root.left, currSum);
        backtrack(root.right, currSum);

        // 回溯
        path.pop();
    }

    backtrack(root, targetSum);

    return res;
}
