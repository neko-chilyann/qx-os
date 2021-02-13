/**
 * 飘窗控制器
 *
 * @export
 * @class PopperController
 */
export class PopperController {
  /**
   * 飘窗集合
   *
   * @protected
   * @type {HTMLOsPopperElement[]}
   * @memberof PopperController
   */
  protected poppers: HTMLOsPopperElement[] = [];

  async open() {
    const container = document.createElement('os-popper');
    document.body.appendChild(container);
    this.poppers.push(container);
  }
}
