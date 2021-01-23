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
   * 系统事件
   *
   * @memberof SystemController
   */
  readonly evt = new OSEvent<ISystemEvents>();
}
