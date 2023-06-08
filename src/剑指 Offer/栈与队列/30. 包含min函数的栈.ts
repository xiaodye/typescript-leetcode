/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
 * 调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */
export default class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {}

  push(x: number): void {
    this.stack.push(x);

    if (this.minStack.length === 0 || x <= this.minStack.at(-1)) {
      this.minStack.push(x);
    }
  }

  pop(): void {
    const top = this.stack.pop();

    if (this.minStack.at(-1) === top) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack.at(-1);
  }

  min(): number {
    return this.minStack.at(-1);
  }
}
