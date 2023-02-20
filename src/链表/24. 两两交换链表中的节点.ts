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
  const dummy = new ListNode(-1, head);

  let curr = dummy;

  while (curr.next && curr.next.next) {
    let node1 = curr.next;
    let node2 = curr.next.next.next;

    // 三个步骤
    curr.next = curr.next.next;
    curr.next.next = node1;
    curr.next.next.next = node2;

    // curr移动两位，准备下一轮交换
    curr = curr.next.next;
  }

  return dummy.next;
}
