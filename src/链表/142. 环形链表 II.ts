import ListNode from "../data-structure/ListNode";

/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * @param head
 * @returns
 */
export default function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  // 初始化快慢指针，慢指针一次走一步，快指针一次走两步
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    // 相遇了，说明肯定有环
    if (slow === fast) {
      slow = head;

      // 现在开始，快慢指针都走一步，相遇点便是入环口
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  return null;
}
