import { SystemController } from '../system/system-controller';
import { ControllerBase } from '../base/controller-base';
import { DesktopContext } from '../../context';
import { DesktopStore } from '../../store';
import { DesktopState } from '../../state';
import { WindowController } from '../window/window-controller';
import { WindowOptions } from '../../options';

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
   * 当前激活窗口
   *
   * @readonly
   * @type {WindowController}
   * @memberof DesktopController
   */
  get window(): WindowController {
    return this.store.activeWindow;
  }

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
   * @param {WindowOptions} [_opt]
   * @return {*}  {WindowController}
   * @memberof DesktopController
   */
  createWindow(_opt?: WindowOptions): WindowController {
    sys.store.zIndexIncrease();
    const win = new WindowController();
    win.setDesktopController(this);
    this.store.addWindow(win);
    this.store.setActiveWindow(win);
    return win;
  }

  /**
   * 销毁窗口
   *
   * @param {WindowController} desktop
   * @memberof DesktopController
   */
  destroyWindow(desktop: WindowController): void {
    sys.store.zIndexReduce();
    this.store.destroyWindow(desktop);
  }
}
