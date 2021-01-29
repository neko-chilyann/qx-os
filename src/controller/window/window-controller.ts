import { WindowContext } from '../../context';
import { IWindowEvents } from '../../interface';
import { WindowState } from '../../state';
import { WindowStore } from '../../store';
import { OSEvent } from '../../utils';
import { ControllerBase } from '../base/controller-base';
import { DesktopController } from '../desktop/desktop-controller';

/**
 * 窗口控制器
 *
 * @export
 * @class WindowController
 * @extends {ControllerBase}
 */
export class WindowController extends ControllerBase {
  /**
   * 窗口上下文
   *
   * @protected
   * @type {WindowContext}
   * @memberof WindowController
   */
  protected readonly ctx: WindowContext;
  /**
   * 桌面控制器
   *
   * @protected
   * @type {DesktopController}
   * @memberof WindowController
   */
  protected desktop: DesktopController;
  /**
   * 系统事件
   *
   * @memberof WindowController
   */
  readonly evt = new OSEvent<IWindowEvents>();
  /**
   * 窗口上下文
   *
   * @memberof WindowController
   */
  readonly context = new WindowContext();
  /**
   * 窗口数据存储
   *
   * @memberof WindowController
   */
  readonly store = new WindowStore();
  /**
   * 窗口状态
   *
   * @memberof WindowController
   */
  readonly state = new WindowState();

  // /**
  //  * 打开窗口
  //  *
  //  * @param {HTMLElement} content
  //  * @memberof WindowController
  //  */
  // open(content: HTMLElement) {
  //   const el = document.createElement('os-window');
  //   el.appendChild(content);
  //   this.container.appendChild(el);
  //   return el;
  // }

  /**
   * 设置桌面控制器
   *
   * @param {DesktopController} desktop
   * @memberof WindowController
   */
  setDesktopController(desktop: DesktopController): void {
    this.desktop = desktop;
  }

  /**
   * 激活当前窗口
   *
   * @memberof WindowController
   */
  active(): void {
    this.desktop.activeWindow(this);
  }
}
