import { createUUID } from 'qx-util';

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
}
