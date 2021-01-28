import { WindowContext } from '../../context';
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
   * Creates an instance of WindowController.
   * @param {WindowContext} ctx
   * @memberof WindowController
   */
  constructor(ctx: WindowContext) {
    super(ctx);
  }

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
}
