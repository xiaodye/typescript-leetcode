import ListNode from "../data-structure/ListNode";

/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(1)
 *
 * @param head
 * @returns
 */
export default function swapPairs(head: ListNode | null): ListNode | null {
  // 空链表或者 1 个节点情况
  if (!head || !head.next) return head;

  // 创建一个虚拟头结点
  const dummy = new ListNode(-1, head);
  let curr = dummy;

  // 每次交换 curr 后面两个节点
  while (curr.next && curr.next.next) {
    const node1 = curr.next;
    const node2 = curr.next.next;
    const node3 = curr.next.next.next;

    // 三个步骤
    curr.next = node2;
    node1.next = node3;
    node2.next = node1;

    // 前进
    curr = node1;
  }

  return dummy.next;
}
