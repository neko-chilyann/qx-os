import { SystemController } from '../system/system-controller';
import { ControllerBase } from '../base/controller-base';
import { DesktopContext } from '../../context';
import { DesktopStore } from '../../store';
import { DesktopState } from '../../state';
import { WindowController } from '../window/window-controller';
import { WindowOptions } from '../../options';
import { IDesktopEvents } from '../../interface';

/**
 * 桌面控制器
 *
 * @export
 * @class DesktopController
 * @extends {ControllerBase}
 */
export class DesktopController extends ControllerBase<DesktopStore, DesktopState, DesktopContext, IDesktopEvents> {
  /**
   * 系统控制器
   *
   * @protected
   * @type {SystemController}
   * @memberof DesktopController
   */
  protected sys: SystemController;
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

  init(): void {
    this._context = new DesktopContext();
    this._store = new DesktopStore();
    this._state = new DesktopState();
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
    const win = new WindowController(_opt);
    win.setDesktopController(this);
    this.store.addWindow(win);
    this.activeWindow(win);
    return win;
  }

  /**
   * 销毁窗口
   *
   * @param {WindowController} window
   * @memberof DesktopController
   */
  destroyWindow(window: WindowController): void {
    sys.store.zIndexReduce();
    this.store.destroyWindow(window);
    this.tick();
  }

  /**
   * 激活指定窗口
   *
   * @param {WindowController} window
   * @memberof DesktopController
   */
  activeWindow(window: WindowController): void {
    this.store.activeWindow = window;
    this.tick();
  }
}
