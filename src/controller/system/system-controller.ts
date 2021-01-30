import { ControllerBase } from '../base/controller-base';
import { ISystemEvents } from '../../interface';
import { SystemContext } from '../../context';
import { SystemStore } from '../../store';
import { SystemState } from '../../state';
import { DesktopController } from '../desktop/desktop-controller';
import { DesktopOptions } from '../../options';

/**
 * 系统控制器
 *
 * @export
 * @class SystemController
 * @extends {ControllerBase}
 */
export class SystemController extends ControllerBase<SystemStore, SystemState, SystemContext, ISystemEvents> {
  /**
   * 唯一实例
   *
   * @private
   * @static
   * @memberof SystemController
   */
  private static readonly instance = new SystemController();
  /**
   * 当前激活桌面
   *
   * @readonly
   * @type {DesktopController}
   * @memberof SystemController
   */
  get desktop(): DesktopController {
    return this.store.activeDesktop;
  }

  /**
   * Creates an instance of SystemController.
   * @param {*} [opts]
   * @memberof SystemController
   */
  constructor(opts?: any) {
    super(opts);
    if (SystemController.instance) {
      return SystemController.instance;
    }
  }

  init(): void {
    this._context = new SystemContext();
    this._store = new SystemStore();
    this._state = new SystemState();
  }

  /**
   * 新建桌面
   *
   * @param {DesktopOptions} [_opt]
   * @return {*}  {DesktopController}
   * @memberof SystemController
   */
  createDesktop(_opt?: DesktopOptions): DesktopController {
    const desktop = new DesktopController();
    desktop.setSystemController(this);
    this.store.addDesktop(desktop);
    this.store.setActiveDesktop(desktop);
    return desktop;
  }
}
