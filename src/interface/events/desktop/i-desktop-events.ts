import { WindowController } from '../../../controller';

export interface IDesktopEvents {
  /**
   * 激活当前桌面
   *
   * @type {void}
   * @memberof IDesktopEvents
   */
  active: void;
  /**
   * 激活窗口
   *
   * @type {WindowController}
   * @memberof IDesktopEvents
   */
  activeWindow: WindowController;
  /**
   * 窗口销毁
   *
   * @type {WindowController}
   * @memberof IDesktopEvents
   */
  destroyWindow: WindowController;
}
