import TreeNode from "../data-structure/TreeNode";

/**
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * @param root
 * @returns
 */
export default function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const res: number[][] = [];

    while (queue.length !== 0) {
        const len = queue.length;
        const arr: number[] = [];

        for (let i = 0; i < len; i++) {
            const top = queue.shift();
            arr.push(top.val);

            if (top.left) queue.push(top.left);
            if (top.right) queue.push(top.right);
        }

        // 通过res.length的长度判断正反遍历
        res.length % 2 === 0 ? res.push(arr) : res.push(arr.reverse());
    }

    return res;
}
