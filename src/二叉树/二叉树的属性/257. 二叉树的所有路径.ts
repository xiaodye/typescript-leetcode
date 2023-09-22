import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
 *
 * - 时间复杂度：O(n^2)
 * - 空间复杂度：O(n^2)
 *
 * @param root
 * @returns
 */
export default function binaryTreePaths(root: TreeNode | null): string[] {
    const paths: string[] = [];

    // 深度优先遍历，前序遍历
    function dfs(root: TreeNode, path: string): void {
        if (!root) return;

        // 1. 拼接到 path
        path += root.val;

        // 2. 判断当前节点是否叶子节点，到头了
        if (!root.left && !root.right) {
            paths.push(path);
            return;
        }

        // 3. 非叶子节点，向下搜索
        path += "->";
        dfs(root.left, path);
        dfs(root.right, path);
    }

    dfs(root, "");

    return paths;
}
