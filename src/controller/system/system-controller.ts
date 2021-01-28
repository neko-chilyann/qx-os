import { ControllerBase } from '../base/controller-base';
import { OSEvent } from '../../utils';
import { ISystemEvents } from '../../interface';
import { SystemContext } from '../../context';
import { SystemStore } from '../../store';
import { SystemState } from '../../state';
import { DesktopController } from '../desktop/desktop-controller';

/**
 * 系统控制器
 *
 * @export
 * @class SystemController
 * @extends {ControllerBase}
 */
export class SystemController extends ControllerBase {
  /**
   * 唯一实例
   *
   * @private
   * @static
   * @memberof SystemController
   */
  private static readonly instance = new SystemController();
  /**
   * 系统事件
   *
   * @memberof SystemController
   */
  readonly evt = new OSEvent<ISystemEvents>();
  /**
   * 系统上下文
   *
   * @protected
   * @type {SystemContext}
   * @memberof SystemController
   */
  protected readonly ctx: SystemContext;
  /**
   * 系统上下文
   *
   * @memberof SystemController
   */
  readonly context = new SystemContext();
  /**
   * 系统数据存储
   *
   * @memberof SystemController
   */
  readonly store = new SystemStore();
  /**
   * 系统状态存储
   *
   * @memberof SystemController
   */
  readonly state = new SystemState();

  /**
   * Creates an instance of SystemController.
   * @memberof SystemController
   */
  constructor() {
    super();
    if (SystemController.instance) {
      return SystemController.instance;
    }
  }

  /**
   * 新建桌面
   *
   * @param {*} [_opt]
   * @return {*}  {DesktopController}
   * @memberof SystemController
   */
  createDesktop(_opt?: any): DesktopController {
    const desktop = new DesktopController();
    desktop.setSystemController(this);
    this.store.addDesktop(desktop);
    return desktop;
  }
}
