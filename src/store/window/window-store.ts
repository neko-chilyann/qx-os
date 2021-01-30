import { StoreBase } from '../base/store-base';
import { WindowStoreOptions } from './window-store-options';

/**
 * 桌面数据存储
 *
 * @export
 * @class WindowStore
 * @extends {StoreBase}
 */
export class WindowStore extends StoreBase {
  protected readonly cache: WindowStoreOptions = {
    backgroundImage: './assets/images/default_bk_img.jpg'
  };
  /**
   * 背景图片
   *
   * @readonly
   * @type {string}
   * @memberof WindowStore
   */
  get backgroundImage(): string {
    return this.cache.backgroundImage;
  }

  /**
   * 设置数据
   *
   * @template K
   * @param {K} key
   * @param {WindowStoreOptions[K]} val
   * @memberof WindowStore
   */
  set<K extends keyof WindowStoreOptions>(key: K, val: WindowStoreOptions[K]): void {
    this.cache[key] = val;
  }

  /**
   * 获取数据
   *
   * @template K
   * @param {K} key
   * @return {*}  {WindowStoreOptions[K]}
   * @memberof WindowStore
   */
  get<K extends keyof WindowStoreOptions>(key: K): WindowStoreOptions[K] {
    return this.cache[key];
  }
}
