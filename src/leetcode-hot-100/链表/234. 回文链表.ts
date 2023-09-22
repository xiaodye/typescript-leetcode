import ListNode from "../../data-structure/ListNode";

/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 * @param head
 * @returns
 */
export default function isPalindrome(head: ListNode | null): boolean {
    // 如果节点个数小于等于 1
    if (!head || !head.next) return true;

    const nodeVals: number[] = [];
    let curr = head;

    while (curr) {
        nodeVals.push(curr.val);
        curr = curr.next;
    }

    for (let i = 0, j = nodeVals.length - 1; i <= j; i++, j--) {
        if (nodeVals[i] !== nodeVals[j]) return false;
    }

    return true;
}
