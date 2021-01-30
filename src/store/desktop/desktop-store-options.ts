import { WindowController } from "../../controller";

/**
 * 桌面存储参数
 *
 * @export
 * @interface DesktopStoreOptions
 */
export interface DesktopStoreOptions {
  /**
   * 背景图片
   *
   * @type {string}
   * @memberof SystemStoreOptions
   */
  backgroundImage: string;
  /**
   * 当前激活窗口
   *
   * @type {WindowController}
   * @memberof DesktopStoreOptions
   */
  activeWindow?: WindowController;
}
