import ListNode from "../data-structure/ListNode";

/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * @param head
 * @param left
 * @param right
 * @returns
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // 使用虚拟头结点
    const dummy = new ListNode(-1, head);

    let prev = dummy;

    // prev 走 left - 1 步，定位到 left 的前一个节点
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // curr 定位到 left 节点
    let curr = prev.next;

    // 总共 right - left + 1个节点，需要做 rigth - left 次插入操作
    for (let i = 0; i < right - left; i++) {
        // node 是需要移动的节点
        // 1. 从链表中删除
        const node = curr.next;
        curr.next = node.next;

        // 2. 插入到prev前面
        node.next = prev.next;
        prev.next = node;
    }

    return dummy.next;
}

export default reverseBetween;
