import Node from "../data-structure/Node";

/**
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。要求返回这个链表的深拷贝。
 * @param head
 * @returns
 */
export default function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  // 初始化头结点，map
  const copyHead = new Node(head.val);
  const hashMap = new Map<Node, Node>();

  // 初始化游标节点
  let copyNode: Node | null = copyHead;
  let curr: Node | null = head;

  // 首次循环，正常处理链表的复制
  while (curr && copyNode) {
    copyNode.val = curr.val;
    copyNode.next = curr.next ? new Node(curr.next.val) : null;
    hashMap.set(curr, copyNode);
    curr = curr.next;
    copyNode = copyNode.next;
  }

  // 游标复位
  copyNode = copyHead;
  curr = head;

  // 第二次循环，特殊处理random关系
  while (curr && copyNode) {
    copyNode.random = curr.random ? hashMap.get(curr.random)! : null;
    curr = curr.next;
    copyNode = copyNode.next;
  }

  return copyHead;
}
