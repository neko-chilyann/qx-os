import { ControllerBase } from '../base/controller-base';
import { ISystemEvents } from '../../interface';
import { SystemContext } from '../../context';
import { SystemStore } from '../../store';
import { SystemState } from '../../state';
import { DesktopController } from '../desktop/desktop-controller';
import { DesktopOptions, SystemOptions } from '../../options';
import { SystemHooks } from '../../hooks';
import { ContextMenuController } from '../context-menu/context-menu-controller';
import { OSEvent } from '../../utils';

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
  readonly evt: OSEvent<ISystemEvents>;
  readonly context: SystemContext;
  readonly store: SystemStore;
  readonly state: SystemState;
  readonly hooks: SystemHooks;
  /**
   * 右键菜单控制器
   *
   * @type {ContextMenuController}
   * @memberof SystemController
   */
  readonly contextMenu: ContextMenuController = new ContextMenuController();
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
    this.context = new SystemContext();
    this.store = new SystemStore();
    this.state = new SystemState();
    this.hooks = new SystemHooks();
    this.setOptions(opts);
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
