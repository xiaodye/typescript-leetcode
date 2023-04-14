/**
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 */
export default class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key);

      // 重新set, 相当于更新 map到最后
      this.map.delete(key);
      this.map.set(key, value);

      return value;
    }

    return -1;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      // 如果有，就删了再赋值
      this.map.delete(key);
    }

    this.map.set(key, value);

    // 判断是不是容量超了，淘汰机制
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
  }
}
