import ListNode from "../data-structure/ListNode";

/**
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 *
 * 时间复杂度：O(n)
 *
 * 空间复杂度：O(1)
 *
 * @param head
 * @param val
 * @returns
 */
export default function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 定义一个虚拟头结点
  const dummy = new ListNode(-1, head);

  // curr用于遍历
  let curr = dummy;

  while (curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
}
