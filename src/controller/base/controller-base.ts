import { forceUpdate } from '@stencil/core';
import { createUUID } from 'qx-util';
import { ContextBase } from '../../context/base/context-base';
import { IEventsBase } from '../../interface';
import { OptionsBase } from '../../options';
import { StateBase } from '../../state';
import { StoreBase } from '../../store';
import { OSEvent } from '../../utils';

/**
 * 控制器基类
 *
 * @export
 * @class ControllerBase
 */
export class ControllerBase<
  Store extends StoreBase,
  State extends StateBase,
  Context extends ContextBase,
  Event extends IEventsBase
> {
  /**
   * 控制器唯一标识
   *
   * @private
   * @memberof ControllerBase
   */
  private _uuid = createUUID();
  get uuid(): string {
    return this._uuid;
  }
  private _component: any;
  /**
   * 配置参数
   *
   * @protected
   * @type {OptionsBase}
   * @memberof ControllerBase
   */
  protected _options: OptionsBase = {};
  get options(): OptionsBase {
    return this._options;
  }
  /**
   * 系统事件
   *
   * @memberof ControllerBase
   */
  protected _evt: OSEvent<Event> = new OSEvent<Event>();
  get evt(): OSEvent<Event> {
    return this._evt;
  }
  /**
   * 桌面上下文
   *
   * @memberof ControllerBase
   */
  protected _context: Context;
  get context(): Context {
    return this._context;
  }
  /**
   * 桌面数据存储
   *
   * @memberof ControllerBase
   */
  protected _store: Store;
  get store(): Store {
    return this._store;
  }
  /**
   * 桌面状态
   *
   * @memberof ControllerBase
   */
  protected _state: State;
  get state(): State {
    return this._state;
  }

  /**
   * Creates an instance of ControllerBase.
   * @param {OptionsBase} [opts]
   * @memberof ControllerBase
   */
  constructor(opts?: OptionsBase) {
    this.init(opts);
    this.setOptions(opts);
  }

  /**
   * 初始化
   *
   * @param {OptionsBase} [_opts]
   * @memberof ControllerBase
   */
  init(_opts?: OptionsBase): void {}

  /**
   * 设置配置参数
   *
   * @param {OptionsBase} [opts]
   * @memberof ControllerBase
   */
  setOptions(opts?: OptionsBase): void {
    if (opts) {
      Object.assign(this._options, opts);
    }
  }

  /**
   * 设置组件
   *
   * @param {*} component
   * @memberof ControllerBase
   */
  setComponent(component: any): void {
    this._component = component;
  }

  /**
   * 注册事件
   *
   * @memberof ControllerBase
   */
  registerEvents(): void {}

  /**
   * 销毁事件
   *
   * @memberof ControllerBase
   */
  unRegisterEvents(): void {}

  /**
   * 组件更新
   *
   * @memberof ControllerBase
   */
  tick(): void {
    if (this._component) {
      forceUpdate(this._component);
    }
  }
}
