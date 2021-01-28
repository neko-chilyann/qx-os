import { DesktopController } from "../../controller";

/**
 * 系统存储参数
 *
 * @export
 * @interface SystemStoreOptions
 */
export interface SystemStoreOptions {
  /**
   * 当前激活桌面
   *
   * @type {DesktopController}
   * @memberof SystemStoreOptions
   */
  activateDesktop?: DesktopController;
  /**
   * 当前激活最高层级
   *
   * @type {number}
   * @memberof SystemStoreOptions
   */
  zIndex: number;
}
