import ListNode from "../data-structure/ListNode";

/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 *
 * - 时间复杂度：O(m+n)
 * - 空间复杂度：O(m)
 *
 * @param headA
 * @param headB
 * @returns
 */
export default function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const visited = new Set<ListNode>();

  let temp = headA;

  // 先把链表a的节点添加到set
  while (temp) {
    visited.add(temp);
    temp = temp.next;
  }

  temp = headB;

  while (temp) {
    if (visited.has(temp)) return temp;
    temp = temp.next;
  }

  return null;
}
