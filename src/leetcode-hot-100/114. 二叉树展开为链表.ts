import TreeNode from "../data-structure/TreeNode";

/**
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * - 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * - 展开后的单链表应该与二叉树 **先序遍历** 顺序相同。
 * @param root
 */
export default function flatten(root: TreeNode | null): void {
  if (!root || (!root.left && !root.right)) return;

  const nodes: TreeNode[] = [];

  function preorder(root: TreeNode): void {
    if (!root) return;

    nodes.push(root);

    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].right = nodes[i + 1];
    nodes[i].left = null;
  }
}
