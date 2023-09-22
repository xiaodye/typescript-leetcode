/**
 * 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
 * 若队列为空，pop_front 和 max_value 需要返回 -1
 */
export default class MaxQueue {
    queue: number[] = [];
    deque: number[] = [];

    constructor() {}

    max_value(): number {
        return this.queue.length === 0 ? -1 : this.deque[0];
    }

    push_back(value: number): void {
        this.queue.push(value);

        // 维护一个单调递减队列
        while (this.deque.length !== 0 && this.deque[this.deque.length - 1] < value) {
            this.deque.pop();
        }
        this.deque.push(value);
    }

    pop_front(): number {
        if (this.queue.length === 0) return -1;

        const front = this.queue.shift();

        // 若front等于单调递减队列的最大值，则递减队列出队一个元素
        if (front === this.deque[0]) {
            this.deque.shift();
        }

        return front;
    }
}
