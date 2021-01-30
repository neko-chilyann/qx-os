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
   * @default 0
   * @type {number}
   * @memberof WindowState
   */
  x = 0;
  /**
   * 偏移量y轴
   *
   * @default 0
   * @type {number}
   * @memberof WindowState
   */
  y = 0;
  /**
   * 窗口宽度
   *
   * @default 300
   * @type {number}
   * @memberof WindowState
   */
  width = 800;
  /**
   * 窗口高度
   *
   * @default 300
   * @type {number}
   * @memberof WindowState
   */
  height = 600;
  /**
   * 拖拽后最小宽度
   *
   * @default 300
   * @type {number}
   * @memberof WindowState
   */
  minWidth = 300;
  /**
   * 拖拽后最小高度
   *
   * @default 300
   * @type {number}
   * @memberof WindowState
   */
  minHeight = 200;
  /**
   * 全屏
   *
   * @default false
   * @type {boolean}
   * @memberof WindowState
   */
  fullScreen = true;
}
