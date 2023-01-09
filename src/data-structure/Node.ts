/**
 * 定义随机指针链表节点类
 */
export default class Node<T = number> {
  val: T;
  next: Node | null;
  random: Node | null;
  constructor(val: T, next: Node | null = null, random: Node | null = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}
