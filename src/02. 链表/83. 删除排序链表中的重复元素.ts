import ListNode from "../data-structure/ListNode";

/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * @param head
 * @returns
 */
export default function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;

  while (curr && curr.next) {
    // 相等则删除不等则跳过
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}
