import ListNode from "../../data-structure/ListNode";

/**
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * @param head
 * @returns
 */
export default function reverseList(head: ListNode): ListNode {
  if (!head || !head.next) return head;

  let prev: ListNode = null;
  let next: ListNode = null;
  let curr = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
