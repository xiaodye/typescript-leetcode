import ListNode from "../data-structure/ListNode";

/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * @param head
 * @param n
 * @returns
 */
export default function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummp = new ListNode(0, head);
  let slow = dummp;
  let fast = dummp;

  // 快指针先走 n 步
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // 快慢指针一起走
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // 慢指针删除自己的后继结点
  slow.next = slow.next.next;

  return dummp.next;
}
