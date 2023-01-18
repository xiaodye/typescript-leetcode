/**
 * 给你一个字符串 s，最多 可以从中删除一个字符。请你判断 s 是否能成为回文字符串。
 * @param s
 * @returns
 */
export default function validPalindrome(s: string): boolean {
  // 定义头尾指针
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // 如果出现不等的情况，可以试着删除左边或者右边一个字符在做判断
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }

    l++;
    r--;
  }

  return true;
}

/**
 * 判断str是否回文
 * @param str
 * @param l
 * @param r
 * @returns
 */
function isPalindrome(str: string, l: number, r: number): boolean {
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    }

    l++;
    r--;
  }
  return true; // 始终没有不一样，返回true
}
