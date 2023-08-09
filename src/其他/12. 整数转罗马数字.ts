/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 解法：模拟法
 * @param num
 * @returns
 */
export default function intToRoman(num: number): string {
  // 通常情况下，罗马数字中小的数字在大的数字的右边
  // 特例：6 种
  const map = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  let reman = "";

  for (const [key, value] of map) {
    while (num >= key) {
      num -= key;
      reman += value;
    }

    if (num === 0) break;
  }

  return reman;
}

/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 解法：硬编码数字
 * @param num
 * @returns
 */
export function intToRoman2(num: number): string {
  const thousands: string[] = ["", "M", "MM", "MMM"];
  const hundreds: string[] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens: string[] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones: string[] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const roman: string[] = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor((num % 1000) / 100)]);
  roman.push(tens[Math.floor((num % 100) / 10)]);
  roman.push(ones[num % 10]);

  return roman.join("");
}
