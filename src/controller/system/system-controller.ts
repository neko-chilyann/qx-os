import { OSEvent } from '../../utils';
import { ISystemEvents } from '../../interface';
import { DesktopController } from '../desktop/desktop-controller';
import { SystemStore } from '../../store';
import { SystemState } from '../../state';

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
   * 系统数据存储
   *
   * @memberof SystemController
   */
  readonly store = new SystemStore();
  /**
   * 系统状态存储
   *
   * @memberof SystemController
   */
  readonly state = new SystemState();
  /**
   * 桌面
   *
   * @memberof SystemController
   */
  readonly desktop = new DesktopController();
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
