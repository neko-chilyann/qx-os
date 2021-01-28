import { StateBase } from '../base/state-base';

/**
 * 窗口状态
 *
 * @export
 * @class WindowState
 * @extends {StateBase}
 */
export class WindowState extends StateBase {
  /**
   * 偏移量x轴
   *
   * @memberof WindowState
   */
  x = 0;
  /**
   * 偏移量y轴
   *
   * @memberof WindowState
   */
  y = 0;
}
