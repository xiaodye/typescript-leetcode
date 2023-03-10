/**
 * 双向链表节点
 */
export default class LinkNode {
  public val: number;
  public prev: LinkNode | null;
  public next: LinkNode | null;
  constructor(val: number, prev: LinkNode | null = null, next: LinkNode | null = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}
