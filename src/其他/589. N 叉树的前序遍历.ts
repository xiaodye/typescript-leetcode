class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

/**
 * 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。
 * n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。
 * @param root
 * @returns
 */
export default function preorder(root: Node | null): number[] {
  const res: number[] = [];

  function traversal(root: Node): void {
    if (!root) return;

    res.push(root.val);

    for (let i = 0; i < root.children.length; i++) {
      traversal(root.children[i]);
    }
  }

  traversal(root);

  return res;
}
