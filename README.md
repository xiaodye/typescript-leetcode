# 🐳TypeScript-Algorithms

# 描述

**仓库正在建设中......**

# 数组⭐️

| 题目                     | leetcode                                         |
| ------------------------ | ------------------------------------------------ |
| [1. 两数之和]()          | https://leetcode.cn/problems/two-sum/            |
| [56. 合并区间]()         | https://leetcode.cn/problems/merge-intervals/    |
| [88. 合并两个有序数组]() | https://leetcode.cn/problems/merge-sorted-array/ |
| [15. 三数之和]()         | https://leetcode.cn/problems/3sum/               |
| [200. 岛屿数量]()        | https://leetcode.cn/problems/number-of-islands/  |

# 链表⭐️

## 单链表节点

```ts
/**
 * 单链表节点类
 */
export default class ListNode<T = number> {
  val: T;
  next: ListNode | null;
  constructor(val: T, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

```

## 推荐刷题清单

| 题目                                | leetcode                                                     |
| ----------------------------------- | ------------------------------------------------------------ |
| [21. 合并两个有序链表]()            | https://leetcode.cn/problems/merge-two-sorted-lists/         |
| [141. 环形链表]()                   | https://leetcode.cn/problems/linked-list-cycle/              |
| [142. 环形链表 II]()                | https://leetcode.cn/problems/linked-list-cycle-ii/           |
| [206. 反转链表]()                   | https://leetcode.cn/problems/reverse-linked-list/            |
| [92. 反转链表 II]()                 | https://leetcode.cn/problems/reverse-linked-list-ii/         |
| [83. 删除排序链表中的重复元素]()    | https://leetcode.cn/problems/remove-duplicates-from-sorted-list/ |
| [82. 删除排序链表中的重复元素 II]() | https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/ |
| [19. 删除链表的倒数第 N 个结点]()   | https://leetcode.cn/problems/remove-nth-node-from-end-of-list/ |
| [138. 复制带随机指针的链表]()       | https://leetcode.cn/problems/copy-list-with-random-pointer/  |

# 字符串⭐️

## 推荐清单

| 题目                    | LeetCode                                                     |
| ----------------------- | ------------------------------------------------------------ |
| [344. 反转字符串]()     | https://leetcode.cn/problems/reverse-string/                 |
| [05. 最长回文子串]()    | https://leetcode.cn/problems/longest-palindromic-substring/  |
| [680. 验证回文串 II]()  | https://leetcode.cn/problems/valid-palindrome-ii/            |
| [211. 添加与搜索单词]() | https://leetcode.cn/problems/design-add-and-search-words-data-structure/ |

# 栈与队列⭐️

## 推荐清单

| 题目               | LeetCode                                        |
| ------------------ | ----------------------------------------------- |
| [20. 有效的括号]() | https://leetcode.cn/problems/valid-parentheses/ |
| [155. 最小栈]()    | https://leetcode.cn/problems/min-stack          |

# 二叉树⭐️

## 二叉树节点

```ts
/**
 * 二叉树节点类
 */
export default class TreeNode<T = number> {
  val: T;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: T, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

```



## 推荐清单

| 题目                                    | LeetCode                                                     |
| --------------------------------------- | ------------------------------------------------------------ |
| [144. 二叉树的前序遍历]()               | https://leetcode.cn/problems/binary-tree-preorder-traversal/ |
| [94. 二叉树的中序遍历]()                | https://leetcode.cn/problems/binary-tree-inorder-traversal/  |
| [145. 二叉树的后序遍历]()               | https://leetcode.cn/problems/binary-tree-postorder-traversal/ |
| [236. 二叉树的最近公共祖先]()           | https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/ |
| [105. 从前序与中序遍历序列构造二叉树]() | https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ |

# 动态规划⭐️

## 推荐清单

| 题目                            | LeetCode                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| [0 - 1背包问题]()               |                                                              |
| [70. 爬楼梯]()                  | https://leetcode.cn/problems/climbing-stairs/                |
| [300. 最长递增子序列]()         | https://leetcode.cn/problems/longest-increasing-subsequence/ |
| [剑指 Offer II 091. 粉刷房子]() | https://leetcode.cn/problems/JEj789/                         |
| [322. 零钱兑换]()               | https://leetcode.cn/problems/coin-change/                    |

# 排序算法专题⭐️

## 高频

- [x] [冒泡排序]()
- [x] [选择排序]()
- [x] [插入排序]()
- [x] [归并排序]()
- [x] [快速排序]()
- [x] [希尔排序]()

## 低频

- [ ] [堆排序]()
- [ ] [基数排序]()
- [ ] [计数排序]()
- [ ] [桶排序]()



