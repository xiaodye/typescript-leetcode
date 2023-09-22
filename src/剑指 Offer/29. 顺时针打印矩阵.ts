/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * @param matrix
 * @returns
 */
export default function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    let [top, bottom, left, right] = [0, matrix.length - 1, 0, matrix[0].length - 1];
    const res: number[] = [];

    while (true) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        if (++top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        if (--right < left) break;

        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        if (--bottom < top) break;

        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        if (++left > right) break;
    }

    return res;
}
