/**
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * @param s
 * @returns
 */
export default function isNumber(s: string): boolean {
  const states = [
    { " ": 0, s: 1, d: 2, ".": 4 },
    { d: 2, ".": 4 },
    { ".": 3, d: 2, e: 5, " ": 8 },
    { d: 3, e: 5, " ": 8 },
    { d: 3 },
    { s: 6, d: 7 },
    { d: 7 },
    { d: 7, " ": 8 },
    { " ": 8 },
  ];

  let p = 0;
  let t = "";

  type charType = "." | "d" | "e" | "s" | " ";

  for (const char of s) {
    if (/^[0-9]$/.test(char)) {
      t = "d";
    } else if (char === "+" || char === "-") {
      t = "s";
    } else if (char === "e" || char === "E") {
      t = "e";
    } else if (char === "." || char === " ") {
      t = char;
    } else {
      t = "?";
    }

    // in : 判断属性是否在对象上
    if (t in states[p]) {
      p = states[p][t as charType];
    } else {
      return false;
    }
  }

  return [2, 3, 7, 8].includes(p);
}
