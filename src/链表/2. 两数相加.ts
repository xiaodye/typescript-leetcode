import ListNode from "../data-structure/ListNode";

/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @param l1
 * @param l2
 * @returns
 */
export default function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
    const dummy = new ListNode(-1);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;

        carry = Math.floor(sum / 10);

        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry === 1) {
        curr.next = new ListNode(carry);
    }

    return dummy.next;
}
