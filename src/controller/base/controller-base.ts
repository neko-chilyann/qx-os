import { ContextBase } from "../../context/base/context-base";

/**
 * 控制器基类
 *
 * @export
 * @class ControllerBase
 */
export class ControllerBase {
  /**
   * 上下文
   *
   * @protected
   * @type {ContextBase}
   * @memberof ControllerBase
   */
  protected readonly ctx: ContextBase;

  /**
   * Creates an instance of ControllerBase.
   * @param {ContextBase} ctx
   * @memberof ControllerBase
   */
  constructor(ctx: ContextBase) {
    this.ctx = ctx;
  }
}
