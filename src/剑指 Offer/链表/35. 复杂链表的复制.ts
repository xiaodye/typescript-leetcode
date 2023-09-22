import Node from "../../data-structure/Node";

/**
 * 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，
 * 每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * @param head
 */
export default function copyRandomList(head: Node): Node {
    if (!head) return null;

    // 建立映射，源节点 -> 新节点
    const map = new Map<Node, Node>();

    // 用于遍历的指针
    let curr = head;

    // 复制各节点，并建立 “原节点 -> 新节点” 的 Map 映射
    while (curr) {
        map.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // 指针重置
    curr = head;

    // 构建新链表的 next 和 random 指向
    while (curr) {
        // 复制节点之间的前后关系, 注意最后一个节点
        map.get(curr).next = map.get(curr.next) ?? null;

        // 复制随机指针
        map.get(curr).random = map.get(curr.random);

        curr = curr.next;
    }

    // 返回新链表的头节点
    return map.get(head);
}
