/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 * @param board
 * @param word
 * @returns
 */
export default function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const columns = board[0].length;
    const visted = Array.from({ length: rows }, () => new Array<boolean>(columns).fill(false));
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    function dfs(i: number, j: number, k: number): boolean {
        if (board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;

        visted[i][j] = true;

        let res = false;

        for (const [dx, dy] of directions) {
            const newi = i + dx;
            const newj = j + dy;

            if (newi >= 0 && newi < rows && newj >= 0 && newj < columns && !visted[newi][newj]) {
                const flag = dfs(newi, newj, k + 1);

                if (flag) {
                    res = true;
                    break;
                }
            }
        }

        visted[i][j] = false;
        return res;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const flag = dfs(i, j, 0);
            if (flag) return true;
        }
    }

    return false;
}
