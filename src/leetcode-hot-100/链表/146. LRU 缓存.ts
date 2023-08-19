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

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;

    return node.value;
  }

  moveToHead(node: DLinkedNode) {
    this.removeFromList(node); // 先从链表中删除
    this.addToHead(node); // 再加到链表的头部
  }

  removeFromList(node: DLinkedNode) {
    let temp1 = node.prev; // 暂存它的后继节点
    let temp2 = node.next; // 暂存它的前驱节点
    temp1.next = temp2; // 前驱节点的next指向后继节点
    temp2.prev = temp1; // 后继节点的prev指向前驱节点
  }

  addToHead(node: DLinkedNode) {
    // 插入到虚拟头结点和真实头结点之间
    node.prev = this.dummyHead; // node的prev指针，指向虚拟头结点
    node.next = this.dummyHead.next; // node的next指针，指向原来的真实头结点
    this.dummyHead.next.prev = node; // 原来的真实头结点的prev，指向node
    this.dummyHead.next = node; // 虚拟头结点的next，指向node
  }

  put(key: number, value: number): void {
    const node = this.map.get(key); // 获取链表中的node

    if (!node) {
      // 不存在于链表，是新数据
      if (this.count === this.capacity) {
        // 容量已满
        this.removeLRUItem(); // 删除最远一次使用的数据
      }

      const newNode = new DLinkedNode(key, value); // 创建新的节点
      this.map.set(key, newNode); // 存入哈希表
      this.addToHead(newNode); // 将节点添加到链表头部
      this.count++; // 缓存数目+1
    } else {
      // 已经存在于链表，老数据
      node.value = value; // 更新value
      this.moveToHead(node); // 将节点移到链表头部
    }
  }

  removeLRUItem() {
    // 删除“老家伙”
    let tail = this.popTail(); // 将它从链表尾部删除
    this.map.delete(tail.key); // 哈希表中也将它删除
    this.count--; // 缓存数目-1
  }

  popTail() {
    // 删除链表尾节点
    const tail = this.dummyTail.prev; // 通过虚拟尾节点找到它
    this.removeFromList(tail); // 删除该真实尾节点
    return tail; // 返回被删除的节点
  }
}
