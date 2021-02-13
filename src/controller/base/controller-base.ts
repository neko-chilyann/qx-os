import { forceUpdate } from '@stencil/core';
import { createUUID } from 'qx-util';
import { ContextBase } from '../../context';
import { BaseHooks } from '../../hooks';
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
export class ControllerBase {
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
   * 事件
   *
   * @type {OSEvent<IEventsBase>}
   * @memberof ControllerBase
   */
  readonly evt: OSEvent<IEventsBase>;
  /**
   * 上下文
   *
   * @memberof ControllerBase
   */
  readonly context: ContextBase;
  /**
   * 数据存储
   *
   * @type {StoreBase}
   * @memberof ControllerBase
   */
  readonly store: StoreBase;
  /**
   * 桌面状态
   *
   * @type {StateBase}
   * @memberof ControllerBase
   */
  readonly state: StateBase;
  /**
   * 钩子
   *
   * @type {BaseHooks}
   * @memberof ControllerBase
   */
  readonly hooks: BaseHooks;

  /**
   * Creates an instance of ControllerBase.
   * @param {OptionsBase} [opts]
   * @memberof ControllerBase
   */
  constructor(_opts?: OptionsBase) {
    this.evt = new OSEvent();
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
