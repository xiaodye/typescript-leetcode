/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
 * @param s
 * @returns
 */
export default function isValid(s: string): boolean {
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  // 初始化一个栈
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
    } else {
      /**
       * 两种情况
       * 1.此时栈空了
       * 2.栈顶元素不能与当前字符相匹配
       */
      if (stack.length === 0 || map.get(stack.pop()) !== s[i]) return false;
    }
  }

  // 如果此时栈还有元素，说明也是不匹配的
  if (stack.length !== 0) return false;

  return true;
}
