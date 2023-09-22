/**
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用 一次 。
 * 注意：解集不能包含重复的组合。
 * @param candidates
 * @param target
 * @returns
 */
export default function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const combine: number[] = [];
    let sum = 0;

    // 用于去重
    const used: boolean[] = [];

    // 需要先给 candidates 排个序
    candidates.sort((a, b) => a - b);

    function backtrack(begin: number): void {
        if (sum > target) return;
        if (sum === target) {
            res.push([...combine]);
            return;
        }

        for (let i = begin; i < candidates.length; i++) {
            // 去重
            if (i - 1 >= 0 && candidates[i] === candidates[i - 1] && !used[i - 1]) continue;

            combine.push(candidates[i]);
            sum += candidates[i];
            used[i] = true;

            backtrack(i + 1);

            combine.pop();
            sum -= candidates[i];
            used[i] = false;
        }
    }

    backtrack(0);

    return res;
}
