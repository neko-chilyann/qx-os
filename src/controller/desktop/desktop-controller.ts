import { WindowController } from '../window/window-controller';

/**
 * 桌面控制器
 *
 * @export
 * @class DesktopController
 */
export class DesktopController {
  /**
   * 窗口控制器
   *
   * @memberof DesktopController
   */
  readonly win = new WindowController();
}
