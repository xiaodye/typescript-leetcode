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

  construct_paths(root, "", paths);

  return paths;
}

function construct_paths(root: TreeNode | null, path: string, paths: string[]): void {
  if (!root) return;

  path += root.val.toString();

  if (!root.left && !root.right) {
    paths.push(path);
  } else {
    // 当前节点不是叶子节点，继续递归遍历
    path += "->";
    construct_paths(root.left, path, paths);
    construct_paths(root.right, path, paths);
  }
}
