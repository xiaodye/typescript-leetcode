import ListNode from "../data-structure/ListNode";

/**
 * 有一个单链表的 head，我们想删除它其中的一个节点 node。
 * 给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。
 * 链表的所有值都是 唯一的，并且保证给定的节点 node 不是链表中的最后一个节点。
 * @param node
 */
function deleteNode(node: ListNode | null): void {
  // 我们只需要删除 next 这个节点，并且让 node.val = node.next
  node.val = node.next.val;
  node.next = node.next.next;
}
