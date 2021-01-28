import { DesktopController } from '../../controller';
import { StoreBase } from '../base/store-base';

/**
 * 系统数据存储
 *
 * @export
 * @class SystemStore
 * @extends {StoreBase}
 */
export class SystemStore extends StoreBase {
  /**
   * 所有桌面
   *
   * @type {Map<string, DesktopController>}
   * @memberof SystemStore
   */
  readonly desktops: Map<string, DesktopController> = new Map();

  /**
   * 新增桌面
   *
   * @param {DesktopController} controller
   * @memberof SystemStore
   */
  addDesktop(controller: DesktopController): void {
    this.desktops.set(controller.uuid, controller);
  }

  /**
   * 销毁桌面
   *
   * @param {DesktopController} controller
   * @memberof SystemStore
   */
  destroyDesktop(controller: DesktopController): void {
    this.desktops.delete(controller.uuid);
  }
}
