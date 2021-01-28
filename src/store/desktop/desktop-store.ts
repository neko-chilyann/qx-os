import { WindowController } from '../../controller';
import { StoreBase } from '../base/store-base';

/**
 * 桌面数据存储
 *
 * @export
 * @class DesktopStore
 * @extends {StoreBase}
 */
export class DesktopStore extends StoreBase {
  /**
   * 所有桌面
   *
   * @type {Map<string, WindowController>}
   * @memberof DesktopStore
   */
  readonly windows: Map<string, WindowController> = new Map();

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
}
