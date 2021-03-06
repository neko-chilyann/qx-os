import { notNilEmpty } from 'qx-util';
import { WindowContext } from '../../context';
import { WindowHooks } from '../../hooks';
import { IWindowEvents } from '../../interface';
import { WindowOptions } from '../../options';
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
  readonly evt: OSEvent<IWindowEvents>;
  readonly context: WindowContext;
  readonly store: WindowStore;
  readonly state: WindowState;
  readonly hooks: WindowHooks;
  /**
   * 桌面控制器
   *
   * @protected
   * @type {DesktopController}
   * @memberof WindowController
   */
  protected desktop: DesktopController;
  /**
   * 是否已激活
   *
   * @readonly
   * @type {boolean}
   * @memberof WindowController
   */
  get isActive(): boolean {
    return this.desktop.store.activeWindow.uuid === this.uuid;
  }

  /**
   * Creates an instance of WindowController.
   * @param {WindowOptions} [opts]
   * @memberof WindowController
   */
  constructor(opts?: WindowOptions) {
    super(opts);
    this.context = new WindowContext();
    this.store = new WindowStore();
    this.state = new WindowState();
    this.hooks = new WindowHooks();
    this.setOptions(opts);
  }

  /**
   * 设置配置参数
   *
   * @param {WindowOptions} [opts]
   * @memberof WindowController
   */
  setOptions(opts?: WindowOptions): void {
    if (opts) {
      Object.assign(this._options, opts);
      const o = this._options as WindowOptions;
      if (notNilEmpty(o.title)) {
        this.store.title = o.title;
      }
      if (notNilEmpty(o.fullScreen)) {
        this.state.fullScreen = o.fullScreen;
      }
      this.tick();
    }
  }

  /**
   * 注册事件
   *
   * @memberof WindowController
   */
  registerEvents(): void {
    this.desktop.evt.on('activeWindow', this.activeChange);
  }

  /**
   * 销毁事件
   *
   * @memberof WindowController
   */
  unregisterEvents(): void {
    this.desktop.evt.off('activeWindow', this.activeChange);
  }

  /**
   * 激活窗口变更
   *
   * @memberof WindowController
   */
  activeChange = (): void => {
    this.tick();
  };

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

  /**
   * 关闭窗口
   *
   * @return {*}  {Promise<void>}
   * @memberof WindowController
   */
  async close(): Promise<void> {
    const ctx = { isClose: true };
    await this.hooks.close.call(ctx);
    if (ctx.isClose === true) {
      this.desktop.destroyWindow(this);
    }
  }
}
