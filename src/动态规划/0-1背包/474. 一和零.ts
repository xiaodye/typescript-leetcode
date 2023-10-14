/**
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
 * 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。
 * 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
 * @param strs
 * @param m
 * @param n
 * @returns
 */
function findMaxForm(strs: string[], m: number, n: number): number {
    // dp[i][j][k] 前 i 个字符串， j：0的数量 k: 1的数量

    const len = strs.length;
    const dp: number[][][] = new Array(len + 1)
        .fill([])
        .map(() => new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0)));

    for (let i = 1; i <= len; i++) {
        const [zeros, ones] = getZerosOnes(strs[i - 1]);

        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                if (j >= zeros && k >= ones) {
                    dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeros][k - ones] + 1);
                } else {
                    dp[i][j][k] = dp[i - 1][j][k];
                }
            }
        }
    }

    return dp[len][m][n];
}

function getZerosOnes(str: string) {
    const zerosOnes: number[] = [0, 0];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            zerosOnes[0]++;
        } else {
            zerosOnes[1]++;
        }
    }

    return zerosOnes;
}

export default findMaxForm;
