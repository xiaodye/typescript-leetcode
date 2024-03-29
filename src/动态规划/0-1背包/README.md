## 动态规划-01背包

- 01背包问题
- 分割等和子集
- 最后一块石头的重量 II
- 一和零
- 目标和

### 01背包问题

> 有**n**件物品和一个最多能背重量为 **w** 的背包。第i件物品的重量是**weight[i]**，得到的价值是**value[i]** 。
>
> 每件物品**只能用一次**，求解将哪些物品装入背包里物品价值总和最大。

题目解读：有 n 个物品，每个物品都有重量和价值，背包容量 v，将哪些物品装入背包里物品价值总和最大

- 每个物品只能用一次
- 凑满背包（不超过背包容量）
- 求价值总和（物品重量和价值分开的）

### [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

> 给你一个 **只包含正整数** 的 **非空** 数组 `nums` 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

题目解读：有 n 个物品，每个物品只能用一次，是否能凑成 v（背包容量）

- 每个物品只能用一次
- 需要凑成 v
- 返回 boolean 值

递推式：

```js
dp[i][j] = dp[i - 1][j];
dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]; // nums[i] <= j
```

### [1049. 最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)

> 有一堆石头，用整数数组 `stones` 表示。其中 `stones[i]` 表示第 `i` 块石头的重量。
>
> 每一回合，从中选出**任意两块石头**，然后将它们一起粉碎。假设石头的重量分别为 `x` 和 `y`，且 `x <= y`。那么粉碎的可能结果如下：
>
> - 如果 `x == y`，那么两块石头都会被完全粉碎；
> - 如果 `x != y`，那么重量为 `x` 的石头将会完全粉碎，而重量为 `y` 的石头新重量为 `y-x`。
>
> 最后，**最多只会剩下一块** 石头。返回此石头 **最小的可能重量** 。如果没有石头剩下，就返回 `0`。

题目解读：从 **stones** 数组中选择，凑成总和不超过 **sum/2** 的最大价值。

- 数组元素值  > 0
- 物品的**重量**就是**价值**

递推公式：

```js
dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - stones[i]] + stones[i]);
dp[i][j] = dp[i - 1][j]
```



### [494. 目标和](https://leetcode.cn/problems/target-sum/)

> 给你一个非负整数数组 `nums` 和一个整数 `target` 。
>
> 向数组中的每个整数前添加 `'+'` 或 `'-'` ，然后串联起所有整数，可以构造一个 **表达式** ：
>
> - 例如，`nums = [2, 1]` ，可以在 `2` 之前添加 `'+'` ，在 `1` 之前添加 `'-'` ，然后串联起来得到表达式 `"+2-1"` 。
>
> 返回可以通过上述方法构造的、运算结果等于 `target` 的不同 **表达式** 的数目。

既然为target，那么就一定有 left组合 - right组合 = target。

left + right = sum，而sum是固定的。right = sum - left

公式来了， left - (sum - left) = target 推导出 left = (target + sum)/2 。

target是固定的，sum是固定的，left就可以求出来。

问题转化成：有 n 个物品，要求凑成 背包容量（v），求**种类数**

注意：

- sum < Math.abs(target) return 0
- (target + sum) % 2 === 1 return 0

递推公式：

```js
dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i]]; // j >= nums[i]
dp[i][j] = dp[i - 1][j]
```





### [474. 一和零](https://leetcode.cn/problems/ones-and-zeroes/)

> 给你一个二进制字符串数组 `strs` 和两个整数 `m` 和 `n` 。
>
> 请你找出并返回 `strs` 的最大子集的长度，该子集中 **最多** 有 `m` 个 `0` 和 `n` 个 `1` 。
>
> 如果 `x` 的所有元素也是 `y` 的元素，集合 `x` 是集合 `y` 的 **子集** 。

题目解读：有  n 个物品，背包容量有两种（0 和 1），求解能放多少个物品。

