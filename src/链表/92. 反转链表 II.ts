import ListNode from "../data-structure/ListNode";

/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * @param head
 * @param left
 * @param right
 * @returns
 */
export default function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(-1, head);
  let prev = dummy;

  // prev往前走 m-1 步，走到整个区间的前驱结点处
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  // curr定位到left
  let curr = prev.next;

  // 将curr的下一个结点插入到prev后面(right - left 次) curr位置每次反转以后会变化
  for (let i = 0; i < right - left; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}
