/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 实现 MinStack 类:
 * - MinStack() 初始化堆栈对象。
 * - void push(int val) 将元素val推入堆栈。
 * - void pop() 删除堆栈顶部的元素。
 * - int top() 获取堆栈顶部的元素。
 * - int getMin() 获取堆栈中的最小元素。
 */
class MinStack {
    #stack: number[] = [];
    #minStack: number[] = [];
    constructor() {}

    push(val: number): void {
        this.#stack.push(val);

        // 最小栈为空 || 进栈的元素小于最小栈栈顶元素
        if (this.#minStack.length === 0 || val <= this.#minStack.at(-1)) {
            this.#minStack.push(val);
        }
    }

    pop(): void {
        const top = this.#stack.pop();

        // 出栈的元素等于最小栈栈顶元素，则最小栈出栈
        if (this.#minStack.length > 0 && top === this.#minStack.at(-1)) {
            this.#minStack.pop();
        }
    }

    top(): number {
        return this.#stack[this.#stack.length - 1];
    }

    getMin(): number {
        return this.#minStack.at(-1);
    }
}

export default MinStack;
