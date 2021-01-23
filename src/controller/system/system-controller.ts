import { OSEvent } from '../../utils';
import { ISystemEvents } from '../../interface';

/**
 * 系统控制器
 *
 * @export
 * @class SystemController
 */
export class SystemController {
  /**
   * 唯一实例
   *
   * @private
   * @static
   * @memberof SystemController
   */
  private static instance = new SystemController();
  /**
   * 系统事件
   *
   * @memberof SystemController
   */
  readonly evt = new OSEvent<ISystemEvents>();
  /**
   * Creates an instance of SystemController.
   * @memberof SystemController
   */
  constructor() {
    if (SystemController.instance) {
      return SystemController.instance;
    }
  }
}
