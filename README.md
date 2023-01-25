# 🐳TypeScript-Algorithms

## 描述

**仓库正在建设中......**

## 二分查找 ⭐️

### 推荐题目

| 题目                                  | LeetCode                                             |
| ------------------------------------- | ---------------------------------------------------- |
| [704. 二分查找](src/二分查找)         | https://leetcode.cn/problems/binary-search/          |
| [35. 搜索插入位置](src/二分查找)      | https://leetcode.cn/problems/search-insert-position/ |
| [367. 有效的完全平方数](src/二分查找) | https://leetcode.cn/problems/valid-perfect-square/   |
| [69. x 的平方根](src/二分查找)        | https://leetcode.cn/problems/sqrtx/                  |

## 数组 ⭐️

### 推荐题目

| 题目                             | LeetCode                                         |
| -------------------------------- | ------------------------------------------------ |
| [1. 两数之和](src/数组)          | https://leetcode.cn/problems/two-sum/            |
| [56. 合并区间](src/数组)         | https://leetcode.cn/problems/merge-intervals/    |
| [88. 合并两个有序数组](src/数组) | https://leetcode.cn/problems/merge-sorted-array/ |
| [15. 三数之和](src/数组)         | https://leetcode.cn/problems/3sum/               |
| [200. 岛屿数量](src/数组)        | https://leetcode.cn/problems/number-of-islands/  |

## 链表 ⭐️

### data-structure

```ts
/**
 * 单链表节点类
 */
class ListNode {
  public val: number;
  public next: ListNode | null;
  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
```

### 推荐题目

| 题目                                        | LeetCode                                                            |
| ------------------------------------------- | ------------------------------------------------------------------- |
| [21. 合并两个有序链表](src/链表)            | https://leetcode.cn/problems/merge-two-sorted-lists/                |
| [141. 环形链表](src/链表)                   | https://leetcode.cn/problems/linked-list-cycle/                     |
| [142. 环形链表 II](src/链表)                | https://leetcode.cn/problems/linked-list-cycle-ii/                  |
| [206. 反转链表](src/链表)                   | https://leetcode.cn/problems/reverse-linked-list/                   |
| [92. 反转链表 II](src/链表)                 | https://leetcode.cn/problems/reverse-linked-list-ii/                |
| [83. 删除排序链表中的重复元素](src/链表)    | https://leetcode.cn/problems/remove-duplicates-from-sorted-list/    |
| [82. 删除排序链表中的重复元素 II](src/链表) | https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/ |
| [19. 删除链表的倒数第 N 个结点](src/链表)   | https://leetcode.cn/problems/remove-nth-node-from-end-of-list/      |
| [138. 复制带随机指针的链表](src/链表)       | https://leetcode.cn/problems/copy-list-with-random-pointer/         |

## 字符串 ⭐️

### 推荐题目

| 题目                              | LeetCode                                                                 |
| --------------------------------- | ------------------------------------------------------------------------ |
| [344. 反转字符串](src/字符串)     | https://leetcode.cn/problems/reverse-string/                             |
| [05. 最长回文子串](src/字符串)    | https://leetcode.cn/problems/longest-palindromic-substring/              |
| [125. 验证回文串](src/字符串)     | https://leetcode.cn/problems/valid-palindrome/                           |
| [680. 验证回文串 II](src/字符串)  | https://leetcode.cn/problems/valid-palindrome-ii/                        |
| [211. 添加与搜索单词](src/字符串) | https://leetcode.cn/problems/design-add-and-search-words-data-structure/ |

## 栈与队列 ⭐️

### 推荐题目

| 题目                                | LeetCode                                                   |
| ----------------------------------- | ---------------------------------------------------------- |
| [20. 有效的括号](src/栈与队列)      | https://leetcode.cn/problems/valid-parentheses/            |
| [155. 最小栈](src/栈与队列)         | https://leetcode.cn/problems/min-stack                     |
| [232. 用栈实现队列](src/栈与队列)   | https://leetcode.cn/problems/implement-queue-using-stacks/ |
| [739. 每日温度](src/栈与队列)       | https://leetcode.cn/problems/daily-temperatures/           |
| [239. 滑动窗口最大值](src/栈与队列) | https://leetcode.cn/problems/sliding-window-maximum/       |

## 二叉树 ⭐️

### data-structure

```ts
/**
 * 二叉树节点类
 */
class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

### 推荐题目

| 题目                                              | LeetCode                                                                                |
| ------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [144. 二叉树的前序遍历](src/二叉树)               | https://leetcode.cn/problems/binary-tree-preorder-traversal/                            |
| [94. 二叉树的中序遍历](src/二叉树)                | https://leetcode.cn/problems/binary-tree-inorder-traversal/                             |
| [145. 二叉树的后序遍历](src/二叉树)               | https://leetcode.cn/problems/binary-tree-postorder-traversal/                           |
| [102. 二叉树的层序遍历](src/二叉树)               | https://leetcode.cn/problems/binary-tree-level-order-traversal/                         |
| [236. 二叉树的最近公共祖先](src/二叉树)           | https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/                   |
| [105. 从前序与中序遍历序列构造二叉树](src/二叉树) | https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ |

## 动态规划 ⭐️

### 推荐题目

| 题目                                        | LeetCode                                                     |
| ------------------------------------------- | ------------------------------------------------------------ |
| [0 - 1 背包问题](src/动态规划)              |                                                              |
| [70. 爬楼梯](src/动态规划)                  | https://leetcode.cn/problems/climbing-stairs/                |
| [300. 最长递增子序列](src/动态规划)         | https://leetcode.cn/problems/longest-increasing-subsequence/ |
| [剑指 Offer II 091. 粉刷房子](src/动态规划) | https://leetcode.cn/problems/JEj789/                         |
| [322. 零钱兑换](src/动态规划)               | https://leetcode.cn/problems/coin-change/                    |

## 回溯 ⭐️

### 推荐题目

| 题目                   | LeetCode                                   |
| ---------------------- | ------------------------------------------ |
| [46. 全排列](src/回溯) | https://leetcode.cn/problems/permutations/ |
| [77. 组合](src/回溯)   | https://leetcode.cn/problems/combinations/ |
| [78. 子集](src/回溯)   | https://leetcode.cn/problems/subsets/      |

## 排序算法专题 ⭐️

### 高频

- [x] [冒泡排序](src/排序算法专题)
- [x] [选择排序](src/排序算法专题)
- [x] [插入排序](src/排序算法专题)
- [x] [归并排序](src/排序算法专题)
- [x] [快速排序](src/排序算法专题)
- [x] [希尔排序](src/排序算法专题)

### 低频

- [ ] [堆排序](src/排序算法专题)
- [ ] [基数排序](src/排序算法专题)
- [ ] [计数排序](src/排序算法专题)
- [ ] [桶排序](src/排序算法专题)
