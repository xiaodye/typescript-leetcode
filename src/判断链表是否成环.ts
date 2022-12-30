import ListNode from "./data-structure/ListNode"

/**
 * 给定一个链表，判断链表中是否有环(哈希法)。
 * @param head
 * @returns
 */
const detectCycle = function (head: ListNode | null): boolean {
  const visted = new Set<ListNode>()
  while (head) {
    if (visted.has(head)) return true
    visted.add(head)
    head = head.next
  }
  return false
}

// test
const arr = [1, 2, 3, 4, 5, 12]
const linkedList = new ListNode(3, new ListNode(5))
const res = detectCycle(linkedList)
console.log(res)
console.log(linkedList)
debugger

export {}
