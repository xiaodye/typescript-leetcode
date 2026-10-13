<div align="center">

# TypeScript · LeetCode 题解

**用 TypeScript 刷 LeetCode 的长期记录 —— 逐题的类型定义、中文思路注释与单元测试**

[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vitest](https://img.shields.io/badge/Vitest-6da13f?logo=vitest&logoColor=white)](https://vitest.dev)
[![pnpm](https://img.shields.io/badge/pnpm-f69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Node.js](https://img.shields.io/badge/Node.js-5fa04e?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![LeetCode](https://img.shields.io/badge/LeetCode-ffa116?logo=leetcode&logoColor=white)](https://leetcode.cn)

<sub>14 个算法分类 · 持续更新中</sub>

</div>

---

## 📖 这是什么

一个的 LeetCode 刷题仓库。每道题一个文件，结构固定：

- **题目描述** —— 文件顶部的 TSDoc，写清原题要点与参数含义
- **实现** —— 单一函数，`export default` 导出，便于测试直接引入
- **思路注释** —— 关键步骤逐行中文注释，说明**为什么这样写**，而不只是写做了什么
- **结构定义** —— 题目需要的 `ListNode` / `TreeNode` 就近声明；跨题复用的放在 `src/data-structure`

不追求一行流的最短解，追求**半年后回看还能看懂**。

## 📊 分类分布

| 分类         | 题量 | 分布                 |
| :----------- | ---: | :------------------- |
| 二叉树       |   28 | `██████████████████` |
| 动态规划     |   27 | `█████████████████`  |
| 链表         |   16 | `██████████`         |
| 回溯         |   11 | `███████`            |
| 数组         |   10 | `██████`             |
| 栈与队列     |   10 | `██████`             |
| 字符串       |    9 | `██████`             |
| 双指针       |    8 | `█████`              |
| 哈希表       |    6 | `████`               |
| 二分查找     |    6 | `████`               |
| 排序专题     |    6 | `████`               |
| 贪心         |    5 | `███`                |
| 前缀和与差分 |    4 | `███`                |
| 其他         |    4 | `███`                |

> 下表题量随刷题进度变化，仅作分布快照。
>
> **两个归档维度**：分类目录按算法归档（一题一类）；题库目录按出处归档
> （`leetcode-hot-100` / `剑指 Offer`，内部再分二级类）。两者有部分题目重复 ——
> 同一道题在两处各存一份，方便按不同线索找回。

## 🚀 快速开始

环境要求：**Node ≥ 24**、**pnpm ≥ 10**（见 `.node-version` 与 `package.json#engines`）。

```bash
pnpm install

pnpm test          # 运行全部测试（vitest run）
pnpm test:watch    # 监听模式，改完即测
```

**调试题解**：用 VSCode 打开任意题目文件 → `F5` → 选择 **node.js** 配置。
用的是 Node 原生调试器，不需要 ts-node / tsx 中转，可直接断点
（`launch.json` 里还保留了 esno、tsx 两种备用配置）。

## 📁 目录结构

```text
src/
├── data-structure/            公共结构：ListNode · TreeNode · DLinkedNode
│
├── 数组/  链表/  哈希表/  字符串/  双指针/  栈与队列/           基础结构
├── 二分查找/  排序专题/  前缀和与差分/                          常用技巧
├── 二叉树/                      含 5 个二级类：遍历 / 属性 / 修改与构造 / 二叉搜索树 / 公共祖先
├── 回溯/                        含 3 个二级类：组合 / 排列 / 子集
├── 动态规划/                     含 4 个二级类：0-1 背包 / 完全背包 / 子序列 / 打家劫舍
├── 贪心/   其他/
│
├── leetcode-hot-100/          题库维度：热题 100（再分 11 个二级类）
└── 剑指 Offer/                 题库维度：剑指 Offer（再分 12 个二级类）
```

## 🧱 公共数据结构

题目里反复用到的三个节点类，放在 `src/data-structure/`：

```ts
export default class ListNode {
    public val: number;
    public next: ListNode | null;
    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}
```

```ts
export default class TreeNode {
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

另有 `DLinkedNode`（带前后指针的双向节点）。题目特有的结构（如带 `random` 指针的
`Node`）就近写在题目文件里，避免为一道题污染公共目录。

## 📚 经典题索引

下面是按分类整理的**经典题**（题名直达源码文件，短链跳 LeetCode 原题）；
`src/` 下实际收录的题解更多，这里挑的是最有代表性的那些。
想找别的题，直接浏览对应分类目录即可。

### 二分查找

| 题目                                                                                                               | 原题                                                                                                                                             |
| :----------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [704. 二分查找](src/二分查找/704.%20二分查找.ts)                                                                   | [binary-search](https://leetcode.cn/problems/binary-search/)                                                                                     |
| [35. 搜索插入位置](src/二分查找/35.%20搜索插入位置.ts)                                                             | [search-insert-position](https://leetcode.cn/problems/search-insert-position/)                                                                   |
| [367. 有效的完全平方数](src/二分查找/367.%20有效的完全平方数.ts)                                                   | [valid-perfect-square](https://leetcode.cn/problems/valid-perfect-square/)                                                                       |
| [69. x 的平方根](src/二分查找/69.%20x%20的平方根.ts)                                                               | [sqrtx](https://leetcode.cn/problems/sqrtx/)                                                                                                     |
| [50. Pow(x, n)](src/二分查找/50.%20Pow%28x,%20n%29.ts)                                                             | [powx-n](https://leetcode.cn/problems/powx-n/)                                                                                                   |
| [34. 在排序数组中查找元素的第一个和最后一个位置](src/二分查找/34.%20在排序数组中查找元素的第一个和最后一个位置.ts) | [find-first-and-last-position-of-element-in-sorted-array](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) |

### 数组

| 题目                                                         | 原题                                                                                 |
| :----------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| [1. 两数之和](src/数组/1.%20两数之和.ts)                     | [two-sum](https://leetcode.cn/problems/two-sum/)                                     |
| [56. 合并区间](src/数组/56.%20合并区间.ts)                   | [merge-intervals](https://leetcode.cn/problems/merge-intervals/)                     |
| [27. 移除元素](src/数组/27.%20移除元素.ts)                   | [remove-element](https://leetcode.cn/problems/remove-element/)                       |
| [977. 有序数组的平方](src/数组/977.%20有序数组的平方.ts)     | [squares-of-a-sorted-array](https://leetcode.cn/problems/squares-of-a-sorted-array/) |
| [88. 合并两个有序数组](src/数组/88.%20合并两个有序数组.ts)   | [merge-sorted-array](https://leetcode.cn/problems/merge-sorted-array/)               |
| [209. 长度最小的子数组](src/数组/209.%20长度最小的子数组.ts) | [minimum-size-subarray-sum](https://leetcode.cn/problems/minimum-size-subarray-sum/) |
| [54. 螺旋矩阵](src/数组/54.%20螺旋矩阵.ts)                   | [spiral-matrix](https://leetcode.cn/problems/spiral-matrix/)                         |
| [59. 螺旋矩阵 II](src/数组/59.%20螺旋矩阵%20II.ts)           | [spiral-matrix-ii](https://leetcode.cn/problems/spiral-matrix-ii/)                   |
| [200. 岛屿数量](src/数组/200.%20岛屿数量.ts)                 | [number-of-islands](https://leetcode.cn/problems/number-of-islands/)                 |

### 链表

| 题目                                                                                          | 原题                                                                                                         |
| :-------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| [203.移除链表元素](src/链表/链表的删除/203.移除链表元素.ts)                                   | [remove-linked-list-elements](https://leetcode.cn/problems/remove-linked-list-elements/)                     |
| [21. 合并两个有序链表](src/链表/21.%20合并两个有序链表.ts)                                    | [merge-two-sorted-lists](https://leetcode.cn/problems/merge-two-sorted-lists/)                               |
| [707. 设计链表](src/链表/707.%20设计链表.ts)                                                  | [design-linked-list](https://leetcode.cn/problems/design-linked-list/)                                       |
| [141. 环形链表](src/链表/141.%20环形链表.ts)                                                  | [linked-list-cycle](https://leetcode.cn/problems/linked-list-cycle/)                                         |
| [142. 环形链表 II](src/链表/142.%20环形链表%20II.ts)                                          | [linked-list-cycle-ii](https://leetcode.cn/problems/linked-list-cycle-ii/)                                   |
| [206. 反转链表](src/链表/206.%20反转链表.ts)                                                  | [reverse-linked-list](https://leetcode.cn/problems/reverse-linked-list/)                                     |
| [92. 反转链表 II](src/链表/92.%20反转链表%20II.ts)                                            | [reverse-linked-list-ii](https://leetcode.cn/problems/reverse-linked-list-ii/)                               |
| [24. 两两交换链表中的节点](src/链表/24.%20两两交换链表中的节点.ts)                            | [swap-nodes-in-pairs](https://leetcode.cn/problems/swap-nodes-in-pairs/)                                     |
| [160. 相交链表](src/链表/160.%20相交链表.ts)                                                  | [intersection-of-two-linked-lists](https://leetcode.cn/problems/intersection-of-two-linked-lists/)           |
| [83. 删除排序链表中的重复元素](src/链表/链表的删除/83.%20删除排序链表中的重复元素.ts)         | [remove-duplicates-from-sorted-list](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)       |
| [82. 删除排序链表中的重复元素 II](src/链表/链表的删除/82.%20删除排序链表中的重复元素%20II.ts) | [remove-duplicates-from-sorted-list-ii](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) |
| [19. 删除链表的倒数第 N 个结点](src/链表/链表的删除/19.%20删除链表的倒数第%20N%20个结点.ts)   | [remove-nth-node-from-end-of-list](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)           |
| [138. 复制带随机指针的链表](src/链表/138.%20复制带随机指针的链表.ts)                          | [copy-list-with-random-pointer](https://leetcode.cn/problems/copy-list-with-random-pointer/)                 |
| [2. 两数相加](src/链表/2.%20两数相加.ts)                                                      | [add-two-numbers](https://leetcode.cn/problems/add-two-numbers/)                                             |

### 哈希表

| 题目                                                             | 原题                                                                                   |
| :--------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| [202. 快乐数](src/哈希表/202.%20快乐数.ts)                       | [happy-number](https://leetcode.cn/problems/happy-number/)                             |
| [242. 有效的字母异位词](src/哈希表/242.%20有效的字母异位词.ts)   | [valid-anagram](https://leetcode.cn/problems/valid-anagram/)                           |
| [383. 赎金信](src/哈希表/383.%20赎金信.ts)                       | [ransom-note](https://leetcode.cn/problems/ransom-note/)                               |
| [349. 两个数组的交集](src/哈希表/349.%20两个数组的交集.ts)       | [intersection-of-two-arrays](https://leetcode.cn/problems/intersection-of-two-arrays/) |
| [454. 四数相加 II](src/哈希表/454.%20四数相加%20II.ts)           | [4sum-ii](https://leetcode.cn/problems/4sum-ii/)                                       |
| [347. 前 K 个高频元素](src/哈希表/347.%20前%20K%20个高频元素.ts) | [top-k-frequent-elements](https://leetcode.cn/problems/top-k-frequent-elements)        |

### 字符串

| 题目                                                                                     | 原题                                                                                                                                   |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [344. 反转字符串](src/字符串/344.%20反转字符串.ts)                                       | [reverse-string](https://leetcode.cn/problems/reverse-string/)                                                                         |
| [541. 反转字符串 II](src/字符串/541.%20反转字符串%20II.ts)                               | [reverse-string-ii](https://leetcode.cn/problems/reverse-string-ii/)                                                                   |
| [459. 重复的子字符串](src/字符串/459.%20重复的子字符串.ts)                               | [repeated-substring-pattern](https://leetcode.cn/problems/repeated-substring-pattern/)                                                 |
| [05. 最长回文子串](src/字符串/05.%20最长回文子串.ts)                                     | [longest-palindromic-substring](https://leetcode.cn/problems/longest-palindromic-substring/)                                           |
| [125. 验证回文串](src/字符串/125.%20验证回文串.ts)                                       | [valid-palindrome](https://leetcode.cn/problems/valid-palindrome/)                                                                     |
| [680. 验证回文串 II](src/字符串/680.%20验证回文串%20II.ts)                               | [valid-palindrome-ii](https://leetcode.cn/problems/valid-palindrome-ii/)                                                               |
| [151. 反转字符串中的单词](src/字符串/151.%20反转字符串中的单词.ts)                       | [reverse-words-in-a-string](https://leetcode.cn/problems/reverse-words-in-a-string/)                                                   |
| [211. 添加与搜索单词](src/字符串/211.%20添加与搜索单词%20-%20数据结构设计.ts)            | [design-add-and-search-words-data-structure](https://leetcode.cn/problems/design-add-and-search-words-data-structure/)                 |
| [28. 找出字符串中第一个匹配项的下标](src/字符串/28.%20找出字符串中第一个匹配项的下标.ts) | [find-the-index-of-the-first-occurrence-in-a-string](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/) |

### 双指针

| 题目                                                                             | 原题                                                                                                          |
| :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| [15. 三数之和](src/双指针/15.%20三数之和.ts)                                     | [3sum](https://leetcode.cn/problems/3sum/)                                                                    |
| [11. 盛最多水的容器](src/双指针/11.%20盛最多水的容器.ts)                         | [container-with-most-water](https://leetcode.cn/problems/container-with-most-water/)                          |
| [27. 移除元素](src/数组/27.%20移除元素.ts)                                       | [remove-element](https://leetcode.cn/problems/remove-element/)                                                |
| [344. 反转字符串](src/字符串/344.%20反转字符串.ts)                               | [reverse-string](https://leetcode.cn/problems/reverse-string/)                                                |
| [392. 判断子序列](src/动态规划/子序列问题/392.%20判断子序列.ts)                  | [is-subsequence](https://leetcode.cn/problems/is-subsequence/)                                                |
| [26. 删除有序数组中的重复项](src/双指针/26.%20删除有序数组中的重复项.ts)         | [remove-duplicates-from-sorted-array](https://leetcode.cn/problems/remove-duplicates-from-sorted-array)       |
| [80. 删除有序数组中的重复项 II](src/双指针/80.%20删除有序数组中的重复项%20II.ts) | [remove-duplicates-from-sorted-array-ii](https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii) |

### 栈与队列

| 题目                                                                                       | 原题                                                                                                              |
| :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [20. 有效的括号](src/栈与队列/20.%20有效的括号.ts)                                         | [valid-parentheses](https://leetcode.cn/problems/valid-parentheses/)                                              |
| [155. 最小栈](src/栈与队列/155.%20最小栈.ts)                                               | [min-stack](https://leetcode.cn/problems/min-stack)                                                               |
| [232. 用栈实现队列](src/栈与队列/232.%20用栈实现队列.ts)                                   | [implement-queue-using-stacks](https://leetcode.cn/problems/implement-queue-using-stacks/)                        |
| [225. 用队列实现栈](src/栈与队列/225.%20用队列实现栈.ts)                                   | [implement-stack-using-queues](https://leetcode.cn/problems/implement-stack-using-queues/)                        |
| [150. 逆波兰表达式求值](src/栈与队列/150.%20逆波兰表达式求值.ts)                           | [evaluate-reverse-polish-notation](https://leetcode.cn/problems/evaluate-reverse-polish-notation)                 |
| [1047. 删除字符串中的所有相邻重复项](src/栈与队列/1047.%20删除字符串中的所有相邻重复项.ts) | [remove-all-adjacent-duplicates-in-string](https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string) |
| [739. 每日温度](src/栈与队列/单调栈/739.%20每日温度.ts)                                    | [daily-temperatures](https://leetcode.cn/problems/daily-temperatures/)                                            |
| [239. 滑动窗口最大值](src/栈与队列/239.%20滑动窗口最大值.ts)                               | [sliding-window-maximum](https://leetcode.cn/problems/sliding-window-maximum/)                                    |

### 二叉树

#### 二叉树的遍历

| 题目                                                                        | 原题                                                                                                 |
| :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| [144. 二叉树的前序遍历](src/二叉树/二叉树的遍历/144.%20二叉树的前序遍历.ts) | [binary-tree-preorder-traversal](https://leetcode.cn/problems/binary-tree-preorder-traversal/)       |
| [94. 二叉树的中序遍历](src/二叉树/二叉树的遍历/94.%20二叉树的中序遍历.ts)   | [binary-tree-inorder-traversal](https://leetcode.cn/problems/binary-tree-inorder-traversal/)         |
| [145. 二叉树的后序遍历](src/二叉树/二叉树的遍历/145.%20二叉树的后序遍历.ts) | [binary-tree-postorder-traversal](https://leetcode.cn/problems/binary-tree-postorder-traversal/)     |
| [102. 二叉树的层序遍历](src/二叉树/二叉树的遍历/102.%20二叉树的层序遍历.ts) | [binary-tree-level-order-traversal](https://leetcode.cn/problems/binary-tree-level-order-traversal/) |

#### 二叉树的属性

| 题目                                                                                | 原题                                                                                       |
| :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| [101. 对称二叉树](src/二叉树/二叉树的属性/101.%20对称二叉树.ts)                     | [symmetric-tree](https://leetcode.cn/problems/symmetric-tree/)                             |
| [104. 二叉树的最大深度](src/二叉树/二叉树的属性/104.%20二叉树的最大深度.ts)         | [maximum-depth-of-binary-tree](https://leetcode.cn/problems/maximum-depth-of-binary-tree/) |
| [111. 二叉树的最小深度](src/二叉树/二叉树的属性/111.%20二叉树的最小深度.ts)         | [minimum-depth-of-binary-tree](https://leetcode.cn/problems/minimum-depth-of-binary-tree/) |
| [222. 完全二叉树的节点个数](src/二叉树/二叉树的属性/222.%20完全二叉树的节点个数.ts) | [count-complete-tree-nodes](https://leetcode.cn/problems/count-complete-tree-nodes/)       |
| [110. 平衡二叉树](src/二叉树/二叉树的属性/110.%20平衡二叉树.ts)                     | [balanced-binary-tree](https://leetcode.cn/problems/balanced-binary-tree/)                 |
| [257. 二叉树的所有路径](src/二叉树/二叉树的属性/257.%20二叉树的所有路径.ts)         | [binary-tree-paths](https://leetcode.cn/problems/binary-tree-paths/)                       |
| [404. 左叶子之和](src/二叉树/二叉树的属性/404.%20左叶子之和.ts)                     | [sum-of-left-leaves](https://leetcode.cn/problems/sum-of-left-leaves/)                     |
| [513. 找树左下角的值](src/二叉树/二叉树的属性/513.%20找树左下角的值.ts)             | [find-bottom-left-tree-value](https://leetcode.cn/problems/find-bottom-left-tree-value/)   |
| [112. 路径总和](src/二叉树/二叉树的属性/112.%20路径总和.ts)                         | [path-sum](https://leetcode.cn/problems/path-sum/)                                         |

#### 二叉树的修改与构造

| 题目                                                                                                          | 原题                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [226. 翻转二叉树](src/二叉树/二叉树的修改与构造/226.%20翻转二叉树.ts)                                         | [invert-binary-tree](https://leetcode.cn/problems/invert-binary-tree/)                                                                                 |
| [617. 合并二叉树](src/二叉树/二叉树的修改与构造/617.%20合并二叉树.ts)                                         | [merge-two-binary-trees](https://leetcode.cn/problems/merge-two-binary-trees/)                                                                         |
| [105. 从前序与中序遍历序列构造二叉树](src/二叉树/二叉树的修改与构造/105.%20从前序与中序遍历序列构造二叉树.ts) | [construct-binary-tree-from-preorder-and-inorder-traversal](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)   |
| [106. 从中序与后序遍历序列构造二叉树](src/二叉树/二叉树的修改与构造/106.%20从中序与后序遍历序列构造二叉树.ts) | [construct-binary-tree-from-inorder-and-postorder-traversal](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |
| [654. 最大二叉树](src/二叉树/二叉树的修改与构造/654.%20最大二叉树.ts)                                         | [maximum-binary-tree](https://leetcode.cn/problems/maximum-binary-tree/)                                                                               |

#### 二叉搜索树

| 题目                                                                                          | 原题                                                                                                                   |
| :-------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| [700. 二叉搜索树中的搜索](src/二叉树/二叉搜索树/700.%20二叉搜索树中的搜索.ts)                 | [search-in-a-binary-search-tree](https://leetcode.cn/problems/search-in-a-binary-search-tree/)                         |
| [701. 二叉搜索树中的插入操作](src/二叉树/二叉搜索树/701.%20二叉搜索树中的插入操作.ts)         | [insert-into-a-binary-search-tree](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)                     |
| [450. 删除二叉搜索树中的节点](src/二叉树/二叉搜索树/450.%20删除二叉搜索树中的节点.ts)         | [delete-node-in-a-bst](https://leetcode.cn/problems/delete-node-in-a-bst/)                                             |
| [98. 验证二叉搜索树](src/二叉树/二叉搜索树/98.%20验证二叉搜索树.ts)                           | [validate-binary-search-tree](https://leetcode.cn/problems/validate-binary-search-tree/)                               |
| [108. 将有序数组转换为二叉搜索树](src/二叉树/二叉搜索树/108.%20将有序数组转换为二叉搜索树.ts) | [convert-sorted-array-to-binary-search-tree](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/) |
| [1382. 将二叉搜索树变平衡](src/二叉树/二叉搜索树/1382.%20将二叉搜索树变平衡.ts)               | [balance-a-binary-search-tree](https://leetcode.cn/problems/balance-a-binary-search-tree/)                             |
| [530. 二叉搜索树的最小绝对差](src/二叉树/二叉搜索树/530.%20二叉搜索树的最小绝对差.ts)         | [minimum-absolute-difference-in-bst](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)                 |
| [501. 二叉搜索树中的众数](src/二叉树/二叉搜索树/501.%20二叉搜索树中的众数.ts)                 | [find-mode-in-binary-search-tree](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)                       |

#### 二叉树公共祖先问题

| 题目                                                                                              | 原题                                                                                                                           |
| :------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| [235. 二叉搜索树的最近公共祖先](src/二叉树/二叉树公共祖先问题/235.%20二叉搜索树的最近公共祖先.ts) | [lowest-common-ancestor-of-a-binary-search-tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/) |
| [236. 二叉树的最近公共祖先](src/二叉树/二叉树公共祖先问题/236.%20二叉树的最近公共祖先.ts)         | [lowest-common-ancestor-of-a-binary-tree](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)               |

### 动态规划

| 题目                                                                               | 原题                                                                                   |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| [509. 斐波那契数](src/动态规划/509.%20斐波那契数.ts)                               | [fibonacci-number](https://leetcode.cn/problems/fibonacci-number/)                     |
| [70. 爬楼梯](src/动态规划/70.%20爬楼梯.ts)                                         | [climbing-stairs](https://leetcode.cn/problems/climbing-stairs/)                       |
| [746. 使用最小花费爬楼梯](src/动态规划/746.%20使用最小花费爬楼梯.ts)               | [min-cost-climbing-stairs](https://leetcode.cn/problems/min-cost-climbing-stairs/)     |
| [96. 不同的二叉搜索树](src/动态规划/96.%20不同的二叉搜索树.ts)                     | [unique-binary-search-trees](https://leetcode.cn/problems/unique-binary-search-trees/) |
| [剑指 Offer II 091. 粉刷房子](src/动态规划/剑指%20Offer%20II%20091.%20粉刷房子.ts) | [JEj789](https://leetcode.cn/problems/JEj789/)                                         |
| [62. 不同路径](src/动态规划/62.%20不同路径.ts)                                     | [unique-paths](https://leetcode.cn/problems/unique-paths/)                             |
| [63. 不同路径 II](src/动态规划/63.%20不同路径%20II.ts)                             | [unique-paths-ii](https://leetcode.cn/problems/unique-paths-ii/)                       |
| [343. 整数拆分](src/动态规划/343.%20整数拆分.ts)                                   | [integer-break](https://leetcode.cn/problems/integer-break/)                           |

#### 0 - 1 背包

| 题目                                                             | 原题                                                                                   |
| :--------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| [416. 分割等和子集](src/动态规划/0-1背包/416.%20分割等和子集.ts) | [partition-equal-subset-sum](https://leetcode.cn/problems/partition-equal-subset-sum/) |

#### 完全背包

| 题目                                                          | 原题                                                             |
| :------------------------------------------------------------ | :--------------------------------------------------------------- |
| [322. 零钱兑换](src/动态规划/完全背包/322.%20零钱兑换.ts)     | [coin-change](https://leetcode.cn/problems/coin-change/)         |
| [139. 单词拆分](src/动态规划/完全背包/139.%20单词拆分.ts)     | [word-break](https://leetcode.cn/problems/word-break/)           |
| [279. 完全平方数](src/动态规划/完全背包/279.%20完全平方数.ts) | [perfect-squares](https://leetcode.cn/problems/perfect-squares/) |

#### 子序列问题

| 题目                                                                        | 原题                                                                                                                 |
| :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| [674. 最长连续递增序列](src/动态规划/子序列问题/674.%20最长连续递增序列.ts) | [longest-continuous-increasing-subsequence](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/) |
| [300. 最长递增子序列](src/动态规划/子序列问题/300.%20最长递增子序列.ts)     | [longest-increasing-subsequence](https://leetcode.cn/problems/longest-increasing-subsequence/)                       |
| [718. 最长重复子数组](src/动态规划/子序列问题/718.%20最长重复子数组.ts)     | [maximum-length-of-repeated-subarray](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)             |
| [1143. 最长公共子序列](src/动态规划/子序列问题/1143.%20最长公共子序列.ts)   | [longest-common-subsequence](https://leetcode.cn/problems/longest-common-subsequence/)                               |
| [53. 最大子数组和](src/动态规划/子序列问题/53.%20最大子数组和.ts)           | [maximum-subarray](https://leetcode.cn/problems/maximum-subarray/)                                                   |

### 回溯

| 题目                                                                | 原题                                                                                                         |
| :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| [46. 全排列](src/回溯/排列/46.%20全排列.ts)                         | [permutations](https://leetcode.cn/problems/permutations/)                                                   |
| [77. 组合](src/回溯/组合/77.%20组合.ts)                             | [combinations](https://leetcode.cn/problems/combinations/)                                                   |
| [78. 子集](src/回溯/子集/78.%20子集.ts)                             | [subsets](https://leetcode.cn/problems/subsets/)                                                             |
| [17. 电话号码的字母组合](src/回溯/组合/17.%20电话号码的字母组合.ts) | [letter-combinations-of-a-phone-number](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/) |
| [22. 括号生成](src/回溯/22.%20括号生成.ts)                          | [generate-parentheses](https://leetcode.cn/problems/generate-parentheses/)                                   |
| [39. 组合总和](src/回溯/组合/39.%20组合总和.ts)                     | [combination-sum](https://leetcode.cn/problems/combination-sum/)                                             |
| [216. 组合总和 III](src/回溯/组合/216.%20组合总和%20III.ts)         | [combination-sum-iii](https://leetcode.cn/problems/combination-sum-iii)                                      |

### 排序算法专题

- [x] [冒泡排序](src/排序专题/冒泡排序.ts)
- [x] [选择排序](src/排序专题/选择排序.ts)
- [x] [插入排序](src/排序专题/插入排序.ts)
- [x] [归并排序](src/排序专题/归并排序.ts)
- [x] [快速排序](src/排序专题/快速排序.ts)
- [x] [希尔排序](src/排序专题/希尔排序.ts)
- [ ] [堆排序](src/排序专题)
- [ ] [基数排序](src/排序专题)
- [ ] [计数排序](src/排序专题)
- [ ] [桶排序](src/排序专题)

## 🧪 测试

用 [Vitest](https://vitest.dev)（`globals` 模式，配置见 `vitest.config.ts`），
测试文件按目录就近放在 `__test__/` 下，目前覆盖：

`二分查找` · `数组` · `字符串` · `哈希表` · `栈与队列` · `栈与队列/单调栈` ·
`排序专题` · `动态规划/完全背包` · `动态规划/打家劫舍` · `leetcode-hot-100/滑动窗口`

新增测试：在题目所在目录建 `__test__/basic.test.ts` 即可（`include` 已限定
`src/**/*.{test,spec}.{ts,tsx}`）。

> 测试是逐步补上的 —— 早期题目只有实现与注释，覆盖率仍在提升。

## 📐 工程约定

| 项       | 约定                                                                 |
| :------- | :------------------------------------------------------------------- |
| 文件命名 | `<题号>. <题名>.ts`；无题号的算法（排序专题）直接以算法名命名        |
| 导出方式 | 每题 `export default` 主函数                                         |
| 结构定义 | 题目专有的就近声明；跨题复用的放 `src/data-structure/`               |
| 代码风格 | Prettier 统一：120 列 / 4 空格 / 双引号 / 分号，保存自动格式化       |
| TS 配置  | `strict: true`，但 `strictNullChecks: false` —— 刷题时少一些空值噪音 |

## 🗂 题库来源

| 题库                 | 题量 | 二级分类                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------------------- | ---: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **leetcode-hot-100** |   45 | [（根目录题目）](src/leetcode-hot-100) <sub>16</sub> · [二叉树](src/leetcode-hot-100/二叉树) <sub>2</sub> · [前缀和](src/leetcode-hot-100/前缀和) <sub>2</sub> · [双指针](src/leetcode-hot-100/双指针) <sub>4</sub> · [哈希](src/leetcode-hot-100/哈希) <sub>3</sub> · [字符串](src/leetcode-hot-100/字符串) <sub>1</sub> · [技巧](src/leetcode-hot-100/技巧) <sub>5</sub> · [数组](src/leetcode-hot-100/数组) <sub>2</sub> · [栈](src/leetcode-hot-100/栈) <sub>1</sub> · [滑动窗口](src/leetcode-hot-100/滑动窗口) <sub>3</sub> · [矩阵](src/leetcode-hot-100/矩阵) <sub>3</sub> · [链表](src/leetcode-hot-100/链表) <sub>3</sub> |
| **剑指 Offer**       |   56 | [（根目录题目）](src/剑指%20Offer) <sub>15</sub> · [位运算](src/剑指%20Offer/位运算) <sub>3</sub> · [分治算法](src/剑指%20Offer/分治算法) <sub>2</sub> · [动态规划](src/剑指%20Offer/动态规划) <sub>5</sub> · [双指针](src/剑指%20Offer/双指针) <sub>7</sub> · [字符串](src/剑指%20Offer/字符串) <sub>4</sub> · [排序](src/剑指%20Offer/排序) <sub>2</sub> · [搜索与回溯算法](src/剑指%20Offer/搜索与回溯算法) <sub>2</sub> · [数学](src/剑指%20Offer/数学) <sub>3</sub> · [查找算法](src/剑指%20Offer/查找算法) <sub>6</sub> · [栈与队列](src/剑指%20Offer/栈与队列) <sub>4</sub> · [链表](src/剑指%20Offer/链表) <sub>3</sub>     |

## 📝 说明

- 仓库**持续更新**：新题按分类归档；来自题库的题目会同时进两个维度
- 除题解外，`排序专题/` 收录了基础排序的手写实现（冒泡 / 选择 / 插入 /
  希尔 / 归并 / 快速），堆排序、基数排序等仍在待办中
- 如果你也在刷同一道题：欢迎参考，但**先自己写一遍再看** —— 题解的价值在于思路，不在答案
