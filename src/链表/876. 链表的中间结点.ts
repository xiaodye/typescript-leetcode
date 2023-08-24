import ListNode from "../data-structure/ListNode";

/**
 * 给你单链表的头结点 head ，请你找出并返回链表的中间结点。
 * 如果有两个中间结点，则返回第二个中间结点。
 * @param head
 * @returns
 */
export default function middleNode(head: ListNode | null): ListNode | null {
  // 只有一个节点情况
  if (!head || !head.next) return head;

  // 快慢指针
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
