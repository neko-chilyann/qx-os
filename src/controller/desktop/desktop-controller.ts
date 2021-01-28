import { SystemController } from '../system/system-controller';
import { ControllerBase } from '../base/controller-base';
import { DesktopContext } from '../../context';
import { DesktopStore } from '../../store';
import { DesktopState } from '../../state';
import { WindowController } from '../window/window-controller';

/**
 * 桌面控制器
 *
 * @export
 * @class DesktopController
 * @extends {ControllerBase}
 */
export class DesktopController extends ControllerBase {
  /**
   * 桌面上下文
   *
   * @protected
   * @type {DesktopContext}
   * @memberof DesktopController
   */
  protected readonly ctx: DesktopContext;
  /**
   * 系统控制器
   *
   * @protected
   * @type {SystemController}
   * @memberof DesktopController
   */
  protected sys: SystemController;
  /**
   * 桌面上下文
   *
   * @memberof DesktopController
   */
  readonly context = new DesktopContext();
  /**
   * 桌面数据存储
   *
   * @memberof DesktopController
   */
  readonly store = new DesktopStore();
  /**
   * 桌面状态
   *
   * @memberof DesktopController
   */
  readonly state = new DesktopState();

  /**
   * 设置系统控制器
   *
   * @param {SystemController} sys
   * @memberof DesktopController
   */
  setSystemController(sys: SystemController): void {
    this.sys = sys;
  }

  /**
   * 新建窗口
   *
   * @param {*} [_opt]
   * @return {*}  {WindowController}
   * @memberof SystemController
   */
  createWindow(_opt?: any): WindowController {
    const desktop = new WindowController();
    desktop.setDesktopController(this);
    this.store.addWindow(desktop);
    return desktop;
  }
}
