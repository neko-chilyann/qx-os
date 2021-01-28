import { ControllerBase } from '../base/controller-base';
import { OSEvent } from '../../utils';
import { ISystemEvents } from '../../interface';
import { SystemContext } from '../../context';

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
  private static instance;
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
   * Creates an instance of SystemController.
   * @memberof SystemController
   */
  constructor(ctx: SystemContext) {
    super(ctx);
    if (SystemController.instance) {
      return SystemController.instance;
    }
    SystemController.instance = this;
  }
}
