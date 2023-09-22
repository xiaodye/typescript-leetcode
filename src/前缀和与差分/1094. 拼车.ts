/**
 * 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）
 * 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，
 * 接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。
 * 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。
 * @param trips
 * @param capacity
 */
export default function carPooling(trips: number[][], capacity: number): boolean {
    // 构建一个差分数组，初始数组为公里数组，比如 0~7 公里，每个对应一个元素
    // 需要确定数组的长度，从 trips[0] 找最大值
    const len = trips.sort((a, b) => b[2] - a[2])[0][2];
    const res: number[] = [];

    // 初始乘客数都为 0，diff 中也全为 0
    const diff = new Array<number>(len + 1).fill(0);

    for (const trip of trips) {
        diff[trip[1]] += trip[0];
        diff[trip[2]] -= trip[0];
    }

    // 构建结果数组
    res[0] = diff[0];
    if (res[0] > capacity) return false;

    for (let i = 1; i < diff.length; i++) {
        res[i] = res[i - 1] + diff[i];
        if (res[i] > capacity) return false;
    }

    return true;
}
