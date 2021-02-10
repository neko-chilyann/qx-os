import { ControllerBase } from '../base/controller-base';
import { ISystemEvents } from '../../interface';
import { SystemContext } from '../../context';
import { SystemStore } from '../../store';
import { SystemState } from '../../state';
import { DesktopController } from '../desktop/desktop-controller';
import { DesktopOptions, SystemOptions } from '../../options';
import { SystemHooks } from '../../hooks';
import { ContextMenuController } from '../context-menu/context-menu-controller';

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
  protected _hooks: SystemHooks;
  get hooks(): SystemHooks {
    return this._hooks;
  }
  /**
   * 右键菜单控制器
   *
   * @protected
   * @memberof SystemController
   */
  protected _contextMenu = new ContextMenuController();
  get contextMenu(): ContextMenuController {
    return this._contextMenu;
  }
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
   * @param {SystemOptions} [opts]
   * @memberof SystemController
   */
  constructor(opts?: SystemOptions) {
    super(opts);
    if (SystemController.instance) {
      return SystemController.instance;
    }
  }

  init(): void {
    this._context = new SystemContext();
    this._store = new SystemStore();
    this._state = new SystemState();
    this._hooks = new SystemHooks();
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
