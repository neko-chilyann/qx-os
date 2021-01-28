import { SystemController } from '../system/system-controller';
import { ControllerBase } from '../base/controller-base';
import { DesktopContext } from '../../context';

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
   * Creates an instance of DesktopController.
   * @param {DesktopContext} ctx
   * @memberof DesktopController
   */
  constructor(ctx: DesktopContext) {
    super(ctx);
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
}
