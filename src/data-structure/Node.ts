/**
 * 随机指针链表节点类
 */
export default class Node {
  public val: number;
  public next: Node | null;
  public random: Node | null;
  constructor(val: number, next: Node | null = null, random: Node | null = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}
