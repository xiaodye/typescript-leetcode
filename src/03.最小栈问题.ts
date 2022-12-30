class MinStack {
  stack: number[] = []
  stack2: number[] = []

  push(x: number) {
    this.stack.push(x)
    // 若入栈的值小于当前最小值，则推入辅助栈栈顶
    if (this.stack.length === 0 || this.stack2[this.stack2.length - 1] > x) {
      this.stack2.push(x)
    }
  }

  pop() {
    // 若出栈的值和当前最小值相等，那么辅助栈也要对栈顶元素进行出栈，确保最小值的有效性
    const top = this.stack.pop()
    if (top === this.stack2[this.stack2.length - 1]) {
      this.stack2.pop()
    }
  }

  top(): number | undefined {
    return this.stack.length !== 0 ? this.stack[this.stack.length - 1] : undefined
  }

  getMin() {
    return this.stack2[this.stack2.length - 1]
  }
}

export {}
