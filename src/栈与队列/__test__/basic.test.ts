import isValid from "../20. 有效的括号";
import MyStack from "../225. 用队列实现栈";
import MyQueue from "../232. 用栈实现队列";
import maxSlidingWindow from "../239. 滑动窗口最大值";

describe("20. 有效的括号", () => {
    it("test-1", () => {
        expect(isValid("()")).toBe(true);
    });

    it("test-2", () => {
        expect(isValid("()[]{}")).toBe(true);
    });
});

describe("232. 用栈实现先队列", () => {
    it("test-1", () => {
        const myQueue = new MyQueue();
        myQueue.push(1); // queue is: [1]
        myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
        expect(myQueue.peek()).toBe(1); // return 1
        expect(myQueue.pop()).toBe(1); // return 1, queue is [2]
        expect(myQueue.empty()).toBe(false); // return false
        expect(myQueue.peek()).toBe(2);
    });
});

describe("225. 用队列实现栈", () => {
    it("test-1", () => {
        const myStack = new MyStack();
        myStack.push(1);
        myStack.push(2);
        expect(myStack.top()).toBe(2); // 返回 2
        expect(myStack.pop()).toBe(2); // 返回 2
        expect(myStack.empty()).toBe(false); // 返回 False
    });
});

describe("239. 滑动窗口最大值", () => {
    it("test-1", () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
    });
});
