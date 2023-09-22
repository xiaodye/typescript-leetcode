class DLinkedNode {
    public key: number;
    public value: number;
    public prev: DLinkedNode;
    public next: DLinkedNode;
    constructor(key: number, value: number, prev: DLinkedNode = null, next: DLinkedNode = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 */
export default class LRUCache {
    private capacity: number;
    private map: Map<number, DLinkedNode>;
    private dummyHead: DLinkedNode;
    private dummyTail: DLinkedNode;
    private count: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.count = 0;
        this.map = new Map();

        // 建立两个虚拟头尾节点，方便操作
        this.dummyHead = new DLinkedNode(-Infinity, -1); // 虚拟头结点
        this.dummyTail = new DLinkedNode(Infinity, -1); // 虚拟尾节点
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
     * @param key
     * @returns
     */
    get(key: number): number {
        const node = this.map.get(key);
        if (!node) return -1;

        this.removeFromList(node); // 从链表中移除该节点
        this.addToHead(node); // 再把该节点移动到链表头部

        return node.value;
    }

    /**
     * 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。
     * 如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
     * @param key
     * @param value
     */
    put(key: number, value: number): void {
        const node = this.map.get(key); // 获取链表中的node

        if (!node) {
            // 不存在于链表，是新数据
            if (this.count === this.capacity) {
                // 容量已满
                const tail = this.popTail(); // 删除链表中的尾结点
                this.map.delete(tail.key); // 从 map 中删除它
                this.count--; // 当前数目减一
            }

            // 创建一个新节点
            const newNode = new DLinkedNode(key, value); // 创建新的节点
            this.map.set(key, newNode); // 存入 map
            this.addToHead(newNode); // 将节点添加到链表头部
            this.count++; // 缓存数目 +1
        } else {
            // 已经存在于链表
            node.value = value; // 更新value
            this.removeFromList(node); // 从链表中移除该节点
            this.addToHead(node); // 再把该节点移动到链表头部
        }
    }

    /**
     * 从链表中移除该节点
     * @param node
     * @returns
     */
    removeFromList(node: DLinkedNode): DLinkedNode {
        let temp1 = node.prev; // 暂存它的后继节点
        let temp2 = node.next; // 暂存它的前驱节点
        temp1.next = temp2; // 前驱节点的next指向后继节点
        temp2.prev = temp1; // 后继节点的prev指向前驱节点

        // 返回被删除的节点
        return node;
    }

    /**
     * 把一个节点添加到链表头部
     * @param node
     */
    addToHead(node: DLinkedNode): void {
        // 将该节点插入到虚拟头结点和第一个节点之间，作为第一个节点
        node.prev = this.dummyHead;
        node.next = this.dummyHead.next;
        this.dummyHead.next.prev = node;
        this.dummyHead.next = node;
    }

    /**
     * 删除链表中尾结点，不是虚拟尾结点
     * @returns
     */
    popTail(): DLinkedNode {
        // 删除链表尾节点
        const tail = this.dummyTail.prev; // 通过虚拟尾节点找到它
        this.removeFromList(tail); // 删除该真实尾节点
        return tail; // 返回被删除的节点
    }
}
