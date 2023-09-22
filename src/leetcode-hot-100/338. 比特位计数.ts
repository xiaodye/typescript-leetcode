/**
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。
 * @param n
 * @returns
 */
export default function countBits(n: number): number[] {
    const res: number[] = [];

    for (let i = 0; i <= n; i++) {
        res.push(countOnes(i));
    }

    return res;
}

function countOnes(x: number): number {
    let count = 0;

    while (x > 0) {
        x &= x - 1;
        count++;
    }

    return count;
}
