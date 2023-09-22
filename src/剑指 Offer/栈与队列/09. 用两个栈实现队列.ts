/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */
export default class CQueue {
    #inStack: number[] = [];
    #outStack: number[] = [];

    constructor() {}

    appendTail(value: number): void {
        this.#inStack.push(value);
    }

    deleteHead(): number {
        if (this.#inStack.length === 0 && this.#outStack.length === 0) {
            return -1;
        }

        if (this.#outStack.length === 0) {
            while (this.#inStack.length !== 0) {
                this.#outStack.push(this.#inStack.pop());
            }
        }

        return this.#outStack.pop();
    }
}
