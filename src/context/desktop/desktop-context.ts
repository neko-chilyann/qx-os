import { DesktopController } from '../../controller';
import { DesktopState } from '../../state';
import { DesktopStore } from '../../store';
import { ContextBase } from '../base/context-base';

/**
 * 桌面上下文
 *
 * @export
 * @class DesktopContext
 * @extends {ContextBase}
 */
export class DesktopContext extends ContextBase {
  /**
   * 桌面数据存储
   *
   * @memberof DesktopContext
   */
  readonly store = new DesktopStore();
  /**
   * 桌面状态
   *
   * @memberof DesktopContext
   */
  readonly state = new DesktopState();
  /**
   * 桌面控制器
   *
   * @type {DesktopController}
   * @memberof DesktopContext
   */
  readonly controller: DesktopController;

  /**
   * Creates an instance of DesktopContext.
   * @memberof DesktopContext
   */
  constructor() {
    super();
    this.controller = new DesktopController(this);
  }
}
