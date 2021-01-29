import { WindowController } from '../../controller';
import { StoreBase } from '../base/store-base';
import { DesktopStoreOptions } from './desktop-store-options';

/**
 * 桌面数据存储
 *
 * @export
 * @class DesktopStore
 * @extends {StoreBase}
 */
export class DesktopStore extends StoreBase {
  protected readonly cache: DesktopStoreOptions = {};
  /**
   * 所有桌面
   *
   * @type {Map<string, WindowController>}
   * @memberof DesktopStore
   */
  readonly windows: Map<string, WindowController> = new Map();
  /**
   * 当前激活窗口
   *
   * @readonly
   * @type {WindowController}
   * @memberof DesktopStore
   */
  get activeWindow(): WindowController {
    return this.cache.activeWindow;
  }

  /**
   * 新增窗口
   *
   * @param {WindowController} window
   * @memberof DesktopStore
   */
  addWindow(window: WindowController): void {
    this.windows.set(window.uuid, window);
  }

  /**
   * 删除窗口
   *
   * @param {WindowController} window
   * @memberof DesktopStore
   */
  destroyWindow(window: WindowController): void {
    this.windows.delete(window.uuid);
  }

  /**
   * 设置数据
   *
   * @template K
   * @param {K} key
   * @param {DesktopStoreOptions[K]} val
   * @memberof DesktopStore
   */
  set<K extends keyof DesktopStoreOptions>(key: K, val: DesktopStoreOptions[K]): void {
    this.cache[key] = val;
  }

  /**
   * 获取数据
   *
   * @template K
   * @param {K} key
   * @return {*}  {DesktopStoreOptions[K]}
   * @memberof DesktopStore
   */
  get<K extends keyof DesktopStoreOptions>(key: K): DesktopStoreOptions[K] {
    return this.cache[key];
  }
}
