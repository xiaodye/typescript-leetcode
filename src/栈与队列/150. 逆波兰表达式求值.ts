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
export default function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const char of tokens) {
        if (["+", "-", "*", "/"].includes(char)) {
            let num1 = stack.pop();
            let num2 = stack.pop();

            switch (char) {
                case "+":
                    stack.push(num2 + num1);
                    break;
                case "-":
                    stack.push(num2 - num1);
                    break;
                case "*":
                    stack.push(num2 * num1);
                    break;
                case "/":
                    stack.push(num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1));
                    break;
                default:
                    break;
            }
        } else {
            stack.push(Number.parseInt(char));
        }
    }

    return stack.pop();
}
