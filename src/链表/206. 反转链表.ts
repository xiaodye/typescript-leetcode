import ListNode from "../data-structure/ListNode";

/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * @param head
 * @returns
 */
export default function reverseList(head: ListNode | null): ListNode | null {
  // 定义三个指针，前驱，当前，后驱
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let curr = head;

  while (curr) {
    next = curr.next;

    // 先反转，prev向前，curr向前
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
