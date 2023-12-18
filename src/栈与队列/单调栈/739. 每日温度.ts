/**
 * 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
 * 如果之后都不会升高，请在该位置用 0 来代替。
 * @param temperatures
 * @returns
 */
function dailyTemperatures(temperatures: number[]): number[] {
    const len = temperatures.length;
    const res = new Array<number>(len).fill(0);

    // 初始化一个递减栈, 存储索引
    const stack: number[] = [];

    for (let i = 0; i < len; i++) {
        // 维护一个单调递减栈
        while (stack.length !== 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }

        stack.push(i);
    }

    return res;
}

export default dailyTemperatures;
