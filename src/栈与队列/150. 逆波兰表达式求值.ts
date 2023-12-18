/**
 * 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
 * 请你计算该表达式。返回一个表示表达式值的整数。
 *
 * 注意：
 * - 有效的算符为 '+'、'-'、'*' 和 '/' 。
 * - 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
 * - 两个整数之间的除法总是 向零截断 。
 * - 表达式中不含除零运算。
 * - 输入是一个根据逆波兰表示法表示的算术表达式。
 * - 答案及所有中间计算结果可以用 32 位 整数表示。
 *
 * @param tokens
 * @returns
 */
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const char of tokens) {
        if (["+", "-", "/", "*"].includes(char)) {
            const num2 = stack.pop();
            const num1 = stack.pop();

            switch (char) {
                case "+":
                    stack.push(num1 + num2);
                    break;
                case "-":
                    stack.push(num1 - num2);
                    break;
                case "*":
                    stack.push(num1 * num2);
                    break;
                case "/":
                    stack.push(num1 / num2 < 0 ? Math.ceil(num1 / num2) : Math.floor(num1 / num2));
            }
        } else {
            stack.push(Number(char));
        }
    }

    return stack.pop();
}

export default evalRPN;
