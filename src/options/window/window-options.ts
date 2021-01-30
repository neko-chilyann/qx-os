/**
 * 窗口参数
 *
 * @export
 * @interface WindowOptions
 */
export interface WindowOptions {
  /**
   * 标题
   *
   * @type {string}
   * @memberof WindowOptions
   */
  title?: string;
  /**
   * 窗口图标
   *
   * @type {string}
   * @memberof WindowOptions
   */
  icon?: string;
  /**
   * 窗口图标svg
   *
   * @type {string}
   * @memberof WindowOptions
   */
  svgIcon?: string;
  /**
   * 是否全屏
   *
   * @type {boolean}
   * @memberof WindowOptions
   */
  fullScreen?: boolean;
}
