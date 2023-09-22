import TreeNode from "../../data-structure/TreeNode";

/**
 * 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
 * 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
 * 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
 * @param root
 */
function rob(root: TreeNode | null): number {
    // 一定是要后序遍历，因为通过递归函数的返回值来做下一步计算
    // 如果抢了当前节点，两个孩子就不能动，如果没抢当前节点，就可以考虑抢左右孩子（注意这里说的是“考虑”）

    const map = new Map<TreeNode, number>();

    function traverse(root: TreeNode): number {
        if (!root) return 0;
        if (!root.left && !root.right) return root.val;
        if (map.has(root)) return map.get(root);

        // 第一种情况，考虑父节点
        let amount1 = root.val;
        if (root.left) amount1 += rob(root.left.left) + rob(root.left.right);
        if (root.right) amount1 += rob(root.right.left) + rob(root.right.right);

        // 第二种情况，不考虑父节点，而考虑左右两个子节点（并不是一定要考虑，具体看递归情况）
        let amount2 = rob(root.left) + rob(root.right);

        // 记忆化
        map.set(root, Math.max(amount1, amount2));

        // 取其中的最大值
        return Math.max(amount1, amount2);
    }

    return traverse(root);
}

export default rob;
