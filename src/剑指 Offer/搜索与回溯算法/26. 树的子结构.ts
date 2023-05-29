import TreeNode from "../../data-structure/TreeNode";

/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 * @param A
 * @param B
 * @returns
 */
export default function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // 若A与B其中一个为空,立即返回false
  if (!A || !B) return false;

  // B为A的子结构有3种情况,满足任意一种即可:
  // 1.B的子结构起点为A的根节点,此时结果为recur(A,B)
  // 2.B的子结构起点隐藏在A的左子树中,而不是直接为A的根节点,此时结果为isSubStructure(A.left, B)
  // 3.B的子结构起点隐藏在A的右子树中,此时结果为isSubStructure(A.right, B)
  return recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

/**
 * 判断B是否为A的子结构,其中B子结构的起点为A的根节点
 * @param A
 * @param B
 * @returns
 */
function recur(A: TreeNode, B: TreeNode): boolean {
  // 若B走完了,说明查找完毕,B为A的子结构
  if (!B) return true;

  // 若B不为空并且A为空或者A与B的值不相等,直接可以判断B不是A的子结构
  if (!A || A.val !== B.val) return false;

  return recur(A.left, B.left) && recur(A.right, B.right);
}
