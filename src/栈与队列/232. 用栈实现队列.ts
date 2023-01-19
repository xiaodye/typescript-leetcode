/**
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）
 */
export default class MyQueue {
  private inStack: number[] = [];
  private outStack: number[] = [];
  constructor() {}

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    /**
     * 情况一：outStack不为空，直接取栈顶即可
     * 情况二：outStack为空，把inStack依次进outStack，然后再取栈顶
     */
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack.pop();
  }

  peek(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
    }

    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
