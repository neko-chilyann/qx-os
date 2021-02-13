import { SystemController } from '../system/system-controller';
import { ControllerBase } from '../base/controller-base';
import { DesktopContext } from '../../context';
import { DesktopStore } from '../../store';
import { DesktopState } from '../../state';
import { WindowController } from '../window/window-controller';
import { DesktopOptions, WindowOptions } from '../../options';
import { IDesktopEvents } from '../../interface';
import { DesktopHooks } from '../../hooks';
import { OSEvent } from '../../utils';

/**
 * 桌面控制器
 *
 * @export
 * @class DesktopController
 * @extends {ControllerBase}
 */
export class DesktopController extends ControllerBase {
  /**
   * 系统控制器
   *
   * @protected
   * @type {SystemController}
   * @memberof DesktopController
   */
  protected sys: SystemController;
  readonly evt: OSEvent<IDesktopEvents>;
  readonly context: DesktopContext;
  readonly store: DesktopStore;
  readonly state: DesktopState;
  readonly hooks: DesktopHooks;
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
   * Creates an instance of DesktopController.
   * @param {DesktopOptions} [opts]
   * @memberof DesktopController
   */
  constructor(opts?: DesktopOptions) {
    super(opts);
    this.context = new DesktopContext();
    this.store = new DesktopStore();
    this.state = new DesktopState();
    this.hooks = new DesktopHooks();
    this.setOptions(opts);
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
    const zIndex = sys.store.zIndexIncrease();
    const win = new WindowController(_opt);
    win.store.zIndex = zIndex;
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
    this.evt.emit('destroyWindow', window);
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
    this.evt.emit('activeWindow', window);
    this.store.addHistory(window);
    this.store.calcHistoryZIndex(this.sys.store.zIndex);
    this.tick();
  }
}
