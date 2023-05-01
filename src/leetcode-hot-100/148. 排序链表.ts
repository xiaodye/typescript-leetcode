import ListNode from "../data-structure/ListNode";

/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * @param head
 * @returns
 */
export default function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const nodes: number[] = [];
  let curr = head;

  while (curr) {
    nodes.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  nodes.sort((a, b) => a - b);

  for (let i = 0; i < nodes.length; i++) {
    curr.val = nodes[i];
    curr = curr.next;
  }

  return head;
}
