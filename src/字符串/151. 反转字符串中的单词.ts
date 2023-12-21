/**
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 *
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 *
 * - 时间复杂度：O(n)
 * - 空间复杂度：O(n)
 *
 * @param s
 * @returns
 */
function reverseWords(s: string): string {
    // 注意：分割单词的空格不止一个
    // 1. 去除首尾空格
    // 2. 队列

    let l = 0;
    let r = s.length - 1;
    let word = "";
    const queue: string[] = [];

    // 去除首尾空格
    while (s[l] === " ") l++;
    while (s[r] === " ") r--;

    for (let i = l; i <= r; i++) {
        // 1. 遇到字符加入到 word
        // 2. 遇到空格
        //  - word !== "", 说明当前单词结束，加入 queue, 清空 word
        //  - word === "", 往前走
        if (s[i] === " " && word !== "") {
            queue.unshift(word);
            word = "";
        } else if (s[i] !== " ") {
            word += s[i];
        }
    }

    // 还遗留一个单词，需要加入 queue
    queue.unshift(word);

    return queue.join(" ");
}

export default reverseWords;
