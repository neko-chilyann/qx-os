import { EventEmitter } from 'events';

/**
 * 事件
 *
 * @export
 * @class OSEvent
 * @template T
 */
export class OSEvent<T> {
  /**
   * 事件初始化
   *
   * @private
   * @type {EventEmitter}
   * @memberof OSEvent
   */
  private e: EventEmitter;

  /**
   * Creates an instance of OSEvent.
   * @memberof OSEvent
   */
  constructor() {
    this.e = new EventEmitter();
    // 设置最大监控事件数量
    this.e.setMaxListeners(100);
  }

  /**
   * 订阅事件
   *
   * @template K
   * @param {K} name
   * @param {(arg?: T[K]) => void} cb
   * @memberof OSEvent
   */
  on<K extends keyof T>(name: K, cb: (arg?: T[K]) => void): void {
    this.e.addListener(name as string, cb);
  }

  /**
   * 取消订阅事件
   *
   * @template K
   * @param {K} name
   * @param {(arg?: T[K]) => void} cb
   * @memberof OSEvent
   */
  off<K extends keyof T>(name: K, cb: (arg?: T[K]) => void): void {
    this.e.removeListener(name as string, cb);
  }

  /**
   * 发送事件
   *
   * @template K
   * @param {K} name
   * @param {*} arg
   * @memberof OSEvent
   */
  emit<K extends keyof T>(name: K, arg): void {
    this.e.emit(name as string, arg);
  }
}
