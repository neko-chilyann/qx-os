import { SystemController } from '../../controller';
import { SystemState } from '../../state';
import { SystemStore } from '../../store';
import { ContextBase } from '../base/context-base';

/**
 * 系统上下文
 *
 * @export
 * @class SystemContext
 * @extends {ContextBase}
 */
export class SystemContext extends ContextBase {
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
   * 系统控制器
   *
   * @type {SystemController}
   * @memberof SystemContext
   */
  readonly controller: SystemController;

  /**
   * Creates an instance of SystemContext.
   * @memberof SystemContext
   */
  constructor() {
    super();
    this.controller = new SystemController(this);
  }
}
