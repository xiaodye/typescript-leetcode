/**
 * 单链表节点类
 */
export default class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
