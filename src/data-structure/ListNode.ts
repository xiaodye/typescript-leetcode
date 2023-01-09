/**
 * 链表节点类
 */
export default class ListNode<T = number> {
  val: T;
  next: ListNode | null;
  constructor(val: T, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
