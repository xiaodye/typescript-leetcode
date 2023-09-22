/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * @param board
 * @param word
 * @returns
 */
export default function exist(board: string[][], word: string): boolean {
    const h = board.length;
    const w = board[0].length;

    // 定义操作，上下右左
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    // visited 记录访问电记录
    const visited = new Array<boolean[]>(h);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array<boolean>(w).fill(false);
    }

    function check(i: number, j: number, s: string, k: number): boolean {
        if (board[i][j] !== s[k]) {
            return false;
        } else if (k === s.length - 1) {
            return true;
        }

        visited[i][j] = true;
        let result = false;

        for (const [dx, dy] of directions) {
            const [newI, newJ] = [i + dx, j + dy];
            if (newI >= 0 && newI < h && newJ >= 0 && newJ < w) {
                if (!visited[newI][newJ]) {
                    const flag = check(newI, newJ, s, k + 1);

                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }

        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }

    return false;
}
