import ListNode from "../../data-structure/ListNode";

/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 * 返回删除后的链表的头节点。
 * @param head
 * @param val
 * @returns
 */
export default function deleteNode(head: ListNode, val: number): ListNode {
    const dummy = new ListNode(-1, head);
    let curr = dummy;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
}
