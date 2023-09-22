import DLinkedNode from "../data-structure/DLinkedNode";

/**
 * 设计链表的实现。
 *
 * 在链表类中实现这些功能：
 * - get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * - addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * - addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * - addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。
 *   如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * - deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 *
 */
export default class MyLinkedList {
    public size: number;
    public head: DLinkedNode | null;
    public tail: DLinkedNode | null;

    constructor() {
        this.size = 0;
        this.head = new DLinkedNode(-1);
        this.tail = new DLinkedNode(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(index: number): number {
        const node = this.getNode(index);
        return node === null ? -1 : node.val;
    }

    addAtHead(val: number): void {
        const node = new DLinkedNode(val);

        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;

        this.size++;
    }

    addAtTail(val: number): void {
        const node = new DLinkedNode(val);

        node.next = this.tail;
        node.prev = this.tail.prev;
        this.tail.prev.next = node;
        this.tail.prev = node;

        this.size++;
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return;
        } else if (index === this.size) {
            this.addAtTail(val);
        } else if (index < 0) {
            this.addAtHead(val);
        } else {
            const node = new DLinkedNode(val);
            let curr = this.getNode(index);

            node.next = curr;
            node.prev = curr.prev;
            curr.prev.next = node;
            curr.prev = node;

            this.size++;
        }
    }

    deleteAtIndex(index: number): void {
        const curr = this.getNode(index);

        if (curr !== null) {
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;

            this.size--;
        }
    }

    getNode(index: number): DLinkedNode | null {
        if (index < 0 || index > this.size - 1) {
            return null;
        }

        const isLeft = index < this.size / 2;
        let curr = isLeft ? this.head : this.tail;

        if (isLeft) {
            for (let i = 0; i <= index; i++) {
                curr = curr.next;
            }
        } else {
            for (let i = 0; i < this.size - index; i++) {
                curr = curr.prev;
            }
        }

        return curr;
    }
}

// test
function linkedListToString(linkedList: MyLinkedList) {
    let curr = linkedList.head;
    let str = "";
    while (curr) {
        str += curr.val + "->";
        curr = curr.next;
    }

    console.log(str);
}

const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
linkedListToString(linkedList);
