import ListNode from "../data-structure/ListNode";

/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * @param head
 * @returns
 */
export default function hasCycle(head: ListNode | null): boolean {
  const visted = new Set<ListNode>();

  while (head) {
    if (visted.has(head)) return true;
    visted.add(head);
    head = head.next;
  }

  return false;
}
