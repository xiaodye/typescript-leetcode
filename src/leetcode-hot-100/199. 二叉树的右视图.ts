import TreeNode from "../data-structure/TreeNode";

/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * @param root
 * @returns
 */
export default function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const res: number[] = [];

    // 创建一个队列，根元素先进队列
    const queue: TreeNode[] = [root];

    while (queue.length !== 0) {
        const len = queue.length;

        // 遍历当前层元素
        for (let i = 0; i < len; i++) {
            const top = queue.shift();

            // 如果存在左或右子节点，则进队列
            if (top.left) queue.push(top.left);
            if (top.right) queue.push(top.right);

            // 记录每层的最后一个元素
            if (i === len - 1) {
                res.push(top.val);
            }
        }
    }

    return res;
}
