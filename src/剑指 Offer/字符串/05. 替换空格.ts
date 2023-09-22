/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * @param s
 * @returns
 */
export default function replaceSpace(s: string): string {
    const arr: string[] = [...s];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            arr[i] = "%20";
        }
    }

    return arr.join("");
}
