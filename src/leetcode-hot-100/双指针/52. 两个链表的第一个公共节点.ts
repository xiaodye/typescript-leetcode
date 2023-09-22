import ListNode from "../../data-structure/ListNode";

/**
 * 输入两个链表，找出它们的第一个公共节点。
 * @param headA
 * @param headB
 * @returns
 */
export default function getIntersectionNode(headA: ListNode, headB: ListNode): ListNode {
    if (!headA || !headB) return null;

    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1 !== null ? p1.next : headB;
        p2 = p2 !== null ? p2.next : headA;
    }

    return p1;
}
