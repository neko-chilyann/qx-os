import { ContextBase } from '../base/context-base';
import { WindowState } from '../../state';
import { WindowStore } from '../../store';
import { WindowController } from '../../controller';

/**
 * 窗口上下文
 *
 * @export
 * @class WindowContext
 * @extends {ContextBase}
 */
export class WindowContext extends ContextBase {
  /**
   * 窗口数据存储
   *
   * @memberof WindowController
   */
  readonly store = new WindowStore();
  /**
   * 窗口状态
   *
   * @memberof WindowController
   */
  readonly state = new WindowState();
  /**
   * 窗口控制器
   *
   * @type {WindowController}
   * @memberof WindowContext
   */
  readonly controller: WindowController;

  /**
   * Creates an instance of WindowContext.
   * @memberof WindowContext
   */
  constructor() {
    super();
    this.controller = new WindowController(this);
  }
}
