import ListNode from "../../data-structure/ListNode";

/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * @param head
 * @returns
 */
export default function reversePrint(head: ListNode): number[] {
  if (!head) return [];

  const res: number[] = [];

  while (head) {
    res.unshift(head.val);
    head = head.next;
  }

  return res;
}
