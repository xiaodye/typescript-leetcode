## LRU 缓存

算法策略：双向链表加map

- get(key):value：通过 key 从 map 中获取 value，并且在链表中把该节点移动到链表的最前面
- put(key, value): void：
  - map 中存在，更新节点值，并且把改节点移动到链表最前面
  - map 中不存在
    - capacity 已满，移除链表中最后的节点，并且从map 中移除，新增一个节点放在链表头部，map 中记录
    - capacity 未满，新增一个节点放在链表头部，map 中记录
- LRUCache
  - 属性
    - capacity：容量
    - count：当前节点个数
    - map<number,DLinkNode>
    - dummyHead：虚拟头结点，方便插入节点
    - dummyTail：虚拟尾结点，方便移除节点
  - 方法：
    - constructor
    - get
    - put
    - removeFromList
    - addToHead
    - popTail