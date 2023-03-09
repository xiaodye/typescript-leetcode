import TreeNode from "../../data-structure/TreeNode";

/**
 * 给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。
 * 如果树中有不止一个众数，可以按 任意顺序 返回。
 * @param root
 * @returns
 */
export default function findMode(root: TreeNode): number[] {
  const map = new Map<number, number>();

  function traverseBST(root: TreeNode): void {
    if (!root) return;

    if (map.has(root.val)) {
      map.set(root.val, map.get(root.val) + 1);
    } else {
      map.set(root.val, 1);
    }

    traverseBST(root.left);
    traverseBST(root.right);
  }

  // 统计各个节点的频率
  traverseBST(root);

  // 先把map转数组，给数组按由大到小频率排个序
  const nodes = [...map].sort((a, b) => b[1] - a[1]);
  const res = [nodes[0][0]];

  for (let i = 1; i < nodes.length; i++) {
    if (nodes[i][1] === nodes[0][1]) {
      res.push(nodes[i][0]);
    } else {
      break;
    }
  }

  return res;
}
