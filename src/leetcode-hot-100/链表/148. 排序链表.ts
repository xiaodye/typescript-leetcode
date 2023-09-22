import ListNode from "../../data-structure/ListNode";

/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * @param head
 * @returns
 */
export default function sortList(head: ListNode | null): ListNode | null {
    // 只有 0 | 1 个节点的情况
    if (!head || !head.next) return head;

    // 使用快慢指正确定链表的中点
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 对链表分割
    fast = slow.next;
    slow.next = null;

    // 递归
    return mergeList(sortList(head), sortList(fast));
}

/**
 * 合并两个有序链表
 * @param list1
 * @param list2
 * @returns
 */
function mergeList(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null;

    const dummyHead = new ListNode(-1);
    let curr = dummyHead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    curr.next = list1 ?? list2;

    return dummyHead.next;
}
