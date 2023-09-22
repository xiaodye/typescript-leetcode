/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * @param numRows
 * @returns
 */
function generate(numRows: number): number[][] {
    const dp = Array.from({ length: numRows + 1 }, () => new Array<number>(numRows + 1).fill(0));
    const res: number[][] = [];

    dp[0][1] = 1;
    res.push([1]);

    for (let i = 1; i < numRows; i++) {
        const arr: number[] = [];
        for (let j = 1; j < i + 2; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            arr.push(dp[i][j]);
        }

        res.push(arr);
    }

    return res;
}

export default generate;
