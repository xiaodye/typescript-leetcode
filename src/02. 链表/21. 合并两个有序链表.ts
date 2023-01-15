import ListNode from "../data-structure/ListNode";

/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @param list1
 * @param list2
 * @returns
 */
export default function mergeTwoLists(list1: ListNode | null, list2: ListNode | null) {
  if (!list1 && !list2) return null;

  // 初始化一个head节点，因为目前我们不知道第一个节点是哪个
  const head = new ListNode(0);
  let curr = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  // 处理链表不等长的情况
  curr.next = list1 ?? list2;

  // head.next才是我们需要的头结点
  return head.next;
}
