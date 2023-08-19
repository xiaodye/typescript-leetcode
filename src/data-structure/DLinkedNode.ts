/**
 * 双向链表节点
 */
export default class DLinkedNode {
  public val: number;
  public prev: DLinkedNode | null;
  public next: DLinkedNode | null;
  constructor(val: number, prev: DLinkedNode | null = null, next: DLinkedNode | null = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
