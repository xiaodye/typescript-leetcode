/**
 * 链表节点类
 */
export default class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}
