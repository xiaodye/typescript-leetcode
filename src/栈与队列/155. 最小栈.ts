export default class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);

    // 最小栈为空 || 进栈的元素小于最小栈栈顶元素，
    if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    // 出栈的元素等于最小栈栈顶元素，则最小栈出栈
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
