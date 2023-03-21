import ListNode from "../data-structure/ListNode";

/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * @param l1
 * @param l2
 * @returns
 */
export default function mergeTwoLists(l1: ListNode, l2: ListNode): ListNode {
  // 创建一个虚拟头结点，因为我们不知道哪个是第一个节点
  const dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  curr.next = l1 ? l1 : l2;

  return dummy.next;
}
