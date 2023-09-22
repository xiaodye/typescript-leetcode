/**
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * 一个队列
 */
export default class MyStack {
    private queue: number[] = [];

    constructor() {}

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        // 将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift());
        }

        return this.queue.shift();
    }

    top(): number {
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 * 两个队列
 */
export class MyStack2 {
    private queue: number[] = [];
    private _queue: number[] = [];

    constructor() {}

    push(x: number): void {
        this.queue.push(x);
    }

    pop(): number {
        while (this.queue.length > 1) {
            this._queue.push(this.queue.shift());
        }

        // 出栈
        let ans = this.queue.shift();

        while (this._queue.length !== 0) {
            this.queue.push(this._queue.shift());
        }

        return ans;
    }

    top(): number {
        return this.queue[this.queue.length - 1];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}
