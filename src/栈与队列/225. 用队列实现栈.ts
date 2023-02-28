/**
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 */
export default class MyStack {
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
