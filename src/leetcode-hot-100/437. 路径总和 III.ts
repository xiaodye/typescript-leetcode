import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * @param root
 * @param targetSum
 * @returns
 */
export default function pathSum(root: TreeNode | null, targetSum: number): number {
    // key: 前缀和，value:数量
    const map = new Map<number, number>([[0, 1]]);
    let res = 0;

    function dfs(root: TreeNode | null, prefixSum: number): void {
        if (!root) return;

        // 当前前缀和
        prefixSum += root.val;

        // 获取存在路径和为targetSum的祖先节点数量
        const count = map.get(prefixSum - targetSum) ?? 0;
        res += count;

        // 记录前缀和
        map.set(prefixSum, (map.get(prefixSum) ?? 0) + 1);

        dfs(root.left, prefixSum);
        dfs(root.right, prefixSum);

        // 状态恢复
        map.set(prefixSum, map.get(prefixSum) - 1);
    }

    dfs(root, 0);

    return res;
}
