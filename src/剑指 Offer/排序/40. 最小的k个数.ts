/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * @param arr
 * @param k
 * @returns
 */
export default function getLeastNumbers(arr: number[], k: number): number[] {
    arr.sort((a, b) => a - b);

    const res: number[] = [];

    for (let i = 0; i < k; i++) {
        res.push(arr[i]);
    }

    return res;
}
