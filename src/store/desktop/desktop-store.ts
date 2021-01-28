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
  private readonly cache: DesktopStoreOptions = {};
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
   * 新增桌面
   *
   * @param {DesktopController} controller
   * @memberof DesktopStore
   */
  addWindow(controller: WindowController): void {
    this.windows.set(controller.uuid, controller);
  }

  /**
   * 销毁桌面
   *
   * @param {DesktopController} controller
   * @memberof DesktopStore
   */
  destroyWindow(controller: WindowController): void {
    this.windows.delete(controller.uuid);
  }

  /**
   * 设置激活桌面
   *
   * @param {*} win
   * @param {*} WindowController
   * @memberof SystemStore
   */
  setActiveWindow(win: WindowController): void {
    this.cache.activeWindow = win;
  }
}
