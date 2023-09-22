/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * @param n
 * @returns
 */
export default function isHappy(n: number): boolean {
    // 用于存储每一次出现的次数，若再次出现，则肯定无限循环，不是快乐数
    const set = new Set<number>([n]);

    while (n !== 1) {
        n = getSum(n);
        if (set.has(n)) return false;
        set.add(n);
    }

    return true;
}

function getSum(n: number): number {
    let sum = 0;

    while (n !== 0) {
        // 取末位
        sum += (n % 10) * (n % 10);

        // 去除末位
        n = Math.floor(n / 10);
    }

    return sum;
}
