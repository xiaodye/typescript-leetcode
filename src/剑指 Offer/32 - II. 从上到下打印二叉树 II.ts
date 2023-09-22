import TreeNode from "../data-structure/TreeNode";

export default function levelOrder(root: TreeNode): number[][] {
    if (!root) return [];

    // 定义队列，根元素先进队
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

        res.push(arr);
    }

    return res;
}
