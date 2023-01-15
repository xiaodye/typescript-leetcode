import ListNode from "../data-structure/ListNode";

/**
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * @param head
 * @returns
 */
export default function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const dummy = new ListNode(0, head);
  let curr = dummy;

  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const x = curr.next.val;

      // 反复地排查后面的元素是否存在多次重复该值的情况
      while (curr.next && curr.next.val === x) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }

  // 返回链表的起始结点
  return dummy.next;
}
