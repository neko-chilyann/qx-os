import { AsyncSeriesHook } from 'qx-util';
import { BaseHooks } from '../base/base-hooks';

/**
 * 窗口钩子
 *
 * @export
 * @class WindowHooks
 * @extends {BaseHooks}
 */
export class WindowHooks extends BaseHooks {
  /**
   * 窗口关闭
   *
   * @memberof WindowHooks
   */
  close = new AsyncSeriesHook<[], { isClose: boolean }>();
}
