import { DesktopContext } from '../../context';
import { StoreBase } from '../base/store-base';

/**
 * 系统数据存储
 *
 * @export
 * @class SystemStore
 * @extends {StoreBase}
 */
export class SystemStore extends StoreBase {
  /**
   * 所有桌面
   *
   * @type {DesktopContext[]}
   * @memberof SystemStore
   */
  readonly desktops: DesktopContext[] = [];
}
