import Node from "../data-structure/Node";

/**
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。要求返回这个链表的深拷贝。
 * @param head
 * @returns
 */
export default function copyRandomList(head: Node | null): Node | null {
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
